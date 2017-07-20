var {iconify} = require('../../utils'),
    _canvas_base = require('../common/_canvas_base'),
    {widgetManager} = require('../../managers')

module.exports = class Input extends _canvas_base {

    static defaults() {

        return {
            type:'input',
            id:'auto',
            linkId:'',

            _style:'style',

            label:'auto',
            unit: '',
            left:'auto',
            top:'auto',
            width:'auto',
            height:'auto',
            horizontal:false,
            color:'auto',
            css:'',

            _plot:'input',

            widgetId:'',
            editable:true,

            _osc:'osc',

            value:'',
            precision:2,
            address:'auto',
            preArgs:[],
            target:[]
        }

    }

    constructor(options) {

        var html = `
            <div class="input">
                <canvas tabindex="0"></canvas>
            </div>
        `

        super({...options, html: html})

        this.scalin

        this.value = ''
        this.stringValue = ''


        if (this.getProp('editable')) {

            this.canvas.on('focus', this.focus.bind(this))
            this.input = $('<input></input>')

            this.input.on('change', (e)=>{
                e.stopPropagation()
            })

        }

        if (this.getProp('widgetId').length) $('body').on(`change.${this.hash}`,this.syncHandle.bind(this))

    }

    focus() {

        this.canvas.attr('tabindex','-1')
        this.input
            .val(this.stringValue)
            .prependTo(this.widget)
            .focus()
            .on('blur', (e)=>{
                this.blur()
            })
            .on('keydown', (e)=>{
                if (e.keyCode==13) this.blur()
                if (e.keyCode==27) this.blur(false)
            })
    }

    blur(change=true) {

        if (change) this.inputChange()

        this.input.off('blur keydown')
        this.canvas.attr('tabindex','0')
        this.input.detach()

    }

    inputChange() {

        this.setValue(this.input.val(), {sync:true, send:true})

    }

    onRemove() {

        $('body').off(`change.${this.hash}`)
        super.onRemove()

    }

    syncHandle(e) {

        if (this.getProp('widgetId')!=e.id || !widgetManager.getWidgetById(e.id).length) return

        var widget = widgetManager.getWidgetById(e.id),
            value

        for (var i=widget.length-1; i>=0; i--) {
            if (widget[i].getValue) {
                this.setValue(widget[i].getValue(), {...e.options, fromSync:true})
                return
            }
        }

    }

    resizeHandle(){
            super.resizeHandle(...arguments)

            if (this.getProp('horizontal')){
                this.ctx.setTransform(1, 0, 0, 1, 0, 0)
                this.ctx.rotate(-Math.PI/2)
                this.ctx.translate(-this.height, 0)

                var ratio = CANVAS_SCALING * this.scaling

                if (ratio != 1) this.ctx.scale(ratio, ratio)
            }


    }

    setValue(v, options={} ) {

        try {
            this.value = JSON.parse(v)
        } catch (err) {
            this.value = v
        }

        this.stringValue = this.getStringValue()
        this.draw()

        if (this.getProp('widgetId').length && !options.fromSync) {
            var widget = widgetManager.getWidgetById(this.getProp('widgetId'))
            options.hash = this.hash
            for (var i=widget.length-1; i>=0; i--) {
                if (widget[i].setValue) {
                    widget[i].setValue(this.value, options)
                }
            }
        }

        if (options.sync) this.widget.trigger({type:'change',id:this.getProp('id'),widget:this, linkId:this.getProp('linkId'), options:options})
        if (options.send && !options.fromSync) this.sendValue()

    }

    draw() {

        var v = this.stringValue,
            width = this.getProp('horizontal') ? this.height : this.width,
            height = !this.getProp('horizontal') ? this.height : this.width

        if (this.getProp('unit')) v += ' ' + this.getProp('unit')

        this.clear()

        this.ctx.fillStyle = this.colors.text

        if (this.textAlign == 'center') {
            this.ctx.fillText(v, Math.round(width/2), Math.round(height/2))
        } else if (this.textAlign == 'right') {
            this.ctx.fillText(v, width, Math.round(height/2))
        } else {
            this.ctx.fillText(v, 0, Math.round(height/2))
        }

        this.clearRect = [0, 0, width, height]

    }

    static deepCopyWithPrecision(obj, precision) {

            var copy = obj,
                key

            if (typeof obj === 'object') {
                copy = Array.isArray(obj) ? [] : {}
                for (key in obj) {
                    copy[key] = Input.deepCopyWithPrecision(obj[key], precision)
                }
            } else if (typeof obj == 'number') {
                return parseFloat(copy.toFixed(precision))
            }

            return copy

    }

    getStringValue() {
        if (this.value === undefined) return ''
        return typeof this.value != 'string' ?
            JSON.stringify(Input.deepCopyWithPrecision(this.value, this.precision)).replace(/,/g, ', ') :
            this.value
    }

}
