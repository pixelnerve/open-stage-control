nmRange = {'min': -70,'20%': -40,'45%': -20,'60%': -10,'71%':-6,'78%':-3,'85%':0,'92%':3,'max': 6}


TABS =
[
    {
        id:"lines",
        widgets: [
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob",
                        range:{min:4000,max:2000}
                    }
                    ,
                    {
                        id: "a",
                        type:"fader",
                        range:{min:0,10:50,100:50000},
                        target:'127.0.0.1:6666'
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            },
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob"
                    }
                    ,
                    {
                        id: "a",
                        type:"fader"
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            },
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob"
                    }
                    ,
                    {
                        id: "a",
                        type:"fader"
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            },
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob"
                    }
                    ,
                    {
                        id: "a",
                        type:"fader"
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            },
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob"
                    }
                    ,
                    {
                        id: "a",
                        type:"fader"
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            },
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob"
                    }
                    ,
                    {
                        id: "a",
                        type:"fader"
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            },
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob"
                    }
                    ,
                    {
                        id: "a",
                        type:"fader"
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            },
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob"
                    }
                    ,
                    {
                        id: "a",
                        type:"fader"
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            },
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob"
                    }
                    ,
                    {
                        id: "a",
                        type:"fader"
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            },
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob"
                    }
                    ,
                    {
                        id: "a",
                        type:"fader"
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            },
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob"
                    }
                    ,
                    {
                        id: "a",
                        type:"fader"
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            },
            {
                id:"strip",
                type:"strip",
                widgets:[
                    {
                        id: "a",
                        type:"knob"
                    }
                    ,
                    {
                        id: "a",
                        type:"fader"
                    }
                    ,
                    {
                        id: "a",
                        type:"toggle"
                    }
                ]
            }

        ]


    },



    {
        id: "testingshits",
        widgets: [
            {
                id: "BassesXXX",
                type: "knob",
                target: "localhost:6666",
                path: "/osc/path/",
                color: "cyan",
                unit:'xx',
                range: {
                    min: -70,
                    max: 6
                }
            },
            {
                id: "BassesXXXa",
                type: "switch",
                target: "localhost:6666",
                path: "/osc/path/",
                color: "#555522",
                values: [0,1,2,3,4,6,7]
            },
            {
                id: "striptest",
                type: "strip",
                widgets: [
                    {
                        id: "BassesXXXa",
                        type: "switch",
                        target: "localhost:6666",
                        path: "/osc/path/",
                        color: "#555522",
                        values: [0,1,2,3,4]
                    },
                    {
                        id: "BassesXXX",
                        type: "knob",
                        target: "localhost:6666",
                        path: "/osc/path/",
                        color: "cyan",
                        range: {
                            min: -70,
                            max: 6
                        }
                    },
                    {
                        id: "BassesXXX",
                        label: "BassesXXX",
                        range: nmRange,
                        target: "localhost:6666 127.0.0.1:125",
                        path: "/test2"
                    },
                    {
                        id: "xypad_test2a",
                        label: "XY Pad",
                        type: "xy",
                        target: "localhost:6666",
                        path: "/pad"
                    },
                    {
                        id: "xGuitars",
                        label: "Guitars",
                        range: nmRange,
                        target: "localhost:6666",
                        path: "/strip/Guitars/Gain/Gain%20(dB)/unscaled"
                    },
                    {
                        id: "button1",
                        type: "toggle",
                        target: "localhost:6666",
                        path: "/osc/path/",
                        color: "#555522"
                    }
                ]
            },

            {
                id: "button1",
                type: "toggle",
                target: "localhost:6666",
                path: "/osc/path/",
                color: "#555522"
            },
            {
                id: "xypad_test2",
                label: "XY Pad",
                type: "xy",
                target: "localhost:6666",
                path: "/SHIT"
            }
        ]
    },
    {
        id: "MainMix",
        label: "MainMix",
        widgets: [
            {
                id: "xypad_test",
                label: "XY Pad",
                type: "rgb",
                target: "localhost:6666",
                path: "/pad"
            },
            {
                id: "Drums",
                label: "Drums",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/Drums/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Basses",
                label: "Basses",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/Basses/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Guitars",
                label: "Guitars",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/Guitars/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxSynths",
                label: "MxSynths",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/MxSynths/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxDrums",
                label: "MxDrums",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/MxDrums/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Vocals",
                label: "Vocals",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/Vocals/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Acoustics",
                label: "Acoustics",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/Acoustics/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FOH",
                label: "FOH",
                range: nmRange,
                target: "localhost:6678",
                path: "/strip/FOH/Gain/Gain%20(dB)/unscaled",
                color: "#777"
            }
        ]
    },
    {
        id: "Drums",
        label: "Drums",
        tabs: [
            {
                id: "Drumset",
                label: "Drumset",
                widgets: [
                    {
                        id: "Kick",
                        label: "Kick",
                        range: nmRange,
                        target: "localhost:6667",
                        path: "/strip/Kick/Gain/Gain%20(dB)/unscaled"
                    },
                    {
                        id: "Snare",
                        label: "Snare",
                        range: nmRange,
                        target: "localhost:6667",
                        path: "/strip/Snare/Gain/Gain%20(dB)/unscaled"
                    },
                    {
                        id: "Toms",
                        label: "Toms",
                        range: nmRange,
                        target: "localhost:6667",
                        path: "/strip/Toms/Gain/Gain%20(dB)/unscaled"
                    },
                    {
                        id: "OH_L",
                        label: "OH-L",
                        range: nmRange,
                        target: "localhost:6667",
                        path: "/strip/OH-L/Gain/Gain%20(dB)/unscaled"
                    },
                    {
                        id: "OH_R",
                        label: "OH-R",
                        range: nmRange,
                        target: "localhost:6667",
                        path: "/strip/OH-R/Gain/Gain%20(dB)/unscaled"
                    },
                    {
                        id: "Drums",
                        label: "Drums",
                        range: nmRange,
                        target: "localhost:6666",
                        path: "/strip/Drums/Gain/Gain%20(dB)/unscaled",
                        color: "#777"
                    }
                ]
            },
            {
                id: "Toms",
                widgets: [
                    {
                        id: "Tom1",
                        label: "Tom1",
                        range: nmRange,
                        target: "localhost:6673",
                        path: "/strip/Tom1/Gain/Gain%20(dB)/unscaled"
                    },
                    {
                        id: "Tom2",
                        label: "Tom2",
                        range: nmRange,
                        target: "localhost:6673",
                        path: "/strip/Tom2/Gain/Gain%20(dB)/unscaled"
                    },
                    {
                        id: "Tom3",
                        label: "Tom3",
                        range: nmRange,
                        target: "localhost:6673",
                        path: "/strip/Tom3/Gain/Gain%20(dB)/unscaled"
                    },
                    {
                        id: "Toms",
                        label: "Toms",
                        range: nmRange,
                        target: "localhost:6667",
                        path: "/strip/Toms/Gain/Gain%20(dB)/unscaled",
                        color: "#777"
                    },
                    {
                        id: "striptest",
                        type: "strip",
                        widgets: [
                            {
                                id: "BassesXXX",
                                label: "BassesXXX",
                                range: nmRange,
                                target: "localhost:6666 127.0.0.1:125",
                                path: "/test2"
                            },
                            {
                                id: "xypad_test2",
                                label: "XY Pad",
                                type: "xy",
                                target: "localhost:6666",
                                path: "/pad"
                            },
                            {
                                id: "xGuitars",
                                label: "Guitars",
                                range: nmRange,
                                target: "localhost:6666",
                                path: "/strip/Guitars/Gain/Gain%20(dB)/unscaled"
                            },
                            {
                                id: "button1",
                                type: "toggle",
                                target: "localhost:6666",
                                path: "/osc/path/",
                                color: "#555522"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "Basses",
        label: "Basses",
        widgets: [
            {
                id: "Bass_ORL",
                label: "Bass_ORL",
                range: nmRange,
                target: "localhost:6668",
                path: "/strip/Bass_ORL/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Oct_Bass_ORL",
                label: "Oct_Bass_ORL",
                range: nmRange,
                target: "localhost:6668",
                path: "/strip/Oct_Bass_ORL/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Bass_ORL",
                label: "FX_Bass_ORL",
                range: nmRange,
                target: "localhost:6668",
                path: "/strip/FX_Bass_ORL/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Bass_Dag",
                label: "Bass_Dag",
                range: nmRange,
                target: "localhost:6668",
                path: "/strip/Bass_Dag/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Oct_Bass_Dag",
                label: "Oct_Bass_Dag",
                range: nmRange,
                target: "localhost:6668",
                path: "/strip/Oct_Bass_Dag/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Bass_Dag",
                label: "FX_Bass_Dag",
                range: nmRange,
                target: "localhost:6668",
                path: "/strip/FX_Bass_Dag/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Basses",
                label: "Basses",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/Basses/Gain/Gain%20(dB)/unscaled",
                color: "#777"
            }
        ]
    },
    {
        id: "Guitars",
        label: "Guitars",
        widgets: [
            {
                id: "Guitar_ORL",
                label: "Guitar_ORL",
                range: nmRange,
                target: "localhost:6669",
                path: "/strip/Guitar_ORL/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Gtr_ORL_1",
                label: "FX_Gtr_ORL_1",
                range: nmRange,
                target: "localhost:6669",
                path: "/strip/FX_Gtr_ORL_1/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Gtr_ORL_2",
                label: "FX_Gtr_ORL_2",
                range: nmRange,
                target: "localhost:6669",
                path: "/strip/FX_Gtr_ORL_2/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Gtr_ORL",
                label: "FX_Gtr_ORL",
                range: nmRange,
                target: "localhost:6669",
                path: "/strip/FX_Gtr_ORL/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Guitar_Dag",
                label: "Guitar_Dag",
                range: nmRange,
                target: "localhost:6669",
                path: "/strip/Guitar_Dag/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Gtr_Dag_1",
                label: "FX_Gtr_Dag_1",
                range: nmRange,
                target: "localhost:6669",
                path: "/strip/FX_Gtr_Dag_1/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Gtr_Dag_2",
                label: "FX_Gtr_Dag_2",
                range: nmRange,
                target: "localhost:6669",
                path: "/strip/FX_Gtr_Dag_2/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Gtr_Dag",
                label: "FX_Gtr_Dag",
                range: nmRange,
                target: "localhost:6669",
                path: "/strip/FX_Gtr_Dag/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Scape_Gtr_Dag",
                label: "Scape_Gtr_Dag",
                range: nmRange,
                target: "localhost:6669",
                path: "/strip/Scape_Gtr_Dag/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Guitars",
                label: "Guitars",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/Guitars/Gain/Gain%20(dB)/unscaled",
                color: "#777"
            }
        ]
    },
    {
        id: "MxSynths",
        label: "MxSynths",
        widgets: [
            {
                id: "MxBass",
                label: "MxBass",
                range: nmRange,
                target: "localhost:6670",
                path: "/strip/MxBass/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxChords",
                label: "MxChords",
                range: nmRange,
                target: "localhost:6670",
                path: "/strip/MxChords/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxLead",
                label: "MxLead",
                range: nmRange,
                target: "localhost:6670",
                path: "/strip/MxLead/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxCtLead",
                label: "MxCtLead",
                range: nmRange,
                target: "localhost:6670",
                path: "/strip/MxCtLead/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxClassical",
                label: "MxClassical",
                range: nmRange,
                target: "localhost:6670",
                path: "/strip/MxClassical/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxSynths",
                label: "MxSynths",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/MxSynths/Gain/Gain%20(dB)/unscaled",
                color: "#777"
            }
        ]
    },
    {
        id: "MxDrums",
        label: "MxDrums",
        widgets: [
            {
                id: "MxKicks",
                label: "MxKicks",
                range: nmRange,
                target: "localhost:6671",
                path: "/strip/MxKicks/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxSnares",
                label: "MxSnares",
                range: nmRange,
                target: "localhost:6671",
                path: "/strip/MxSnares/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxCymbs",
                label: "MxCymbs",
                range: nmRange,
                target: "localhost:6671",
                path: "/strip/MxCymbs/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxCont",
                label: "MxCont",
                range: nmRange,
                target: "localhost:6671",
                path: "/strip/MxCont/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxSamples",
                label: "MxSamples",
                range: nmRange,
                target: "localhost:6671",
                path: "/strip/MxSamples/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "MxDrums",
                label: "MxDrums",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/MxDrums/Gain/Gain%20(dB)/unscaled",
                color: "#777"
            }
        ]
    },
    {
        id: "Acoustics",
        label: "Acoustics",
        widgets: [
            {
                id: "PianoToy",
                label: "PianoToy",
                range: nmRange,
                target: "localhost:6674",
                path: "/strip/PianoToy/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Cymbalum",
                label: "Cymbalum",
                range: nmRange,
                target: "localhost:6674",
                path: "/strip/Cymbalum/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "GuitarAc",
                label: "GuitarAc",
                range: nmRange,
                target: "localhost:6674",
                path: "/strip/GuitarAc/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Acoustics",
                label: "Acoustics",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/Acoustics/Gain/Gain%20(dB)/unscaled",
                color: "#777"
            }
        ]
    },
    {
        id: "Vocals",
        label: "Vocals",
        widgets: [
            {
                id: "Vx_ORL",
                label: "Vx_ORL",
                range: nmRange,
                target: "localhost:6672",
                path: "/strip/Vx_ORL/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Vx_ORL_1",
                label: "FX_Vx_ORL_1",
                range: nmRange,
                target: "localhost:6672",
                path: "/strip/FX_Vx_ORL_1/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Vx_ORL_2",
                label: "FX_Vx_ORL_2",
                range: nmRange,
                target: "localhost:6672",
                path: "/strip/FX_Vx_ORL_2/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Vx_ORL",
                label: "FX_Vx_ORL",
                range: nmRange,
                target: "localhost:6672",
                path: "/strip/FX_Vx_ORL/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Vx_Dag",
                label: "Vx_Dag",
                range: nmRange,
                target: "localhost:6672",
                path: "/strip/Vx_Dag/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Vx_Dag_1",
                label: "FX_Vx_Dag_1",
                range: nmRange,
                target: "localhost:6672",
                path: "/strip/FX_Vx_Dag_1/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Vx_Dag_2",
                label: "FX_Vx_Dag_2",
                range: nmRange,
                target: "localhost:6672",
                path: "/strip/FX_Vx_Dag_2/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "FX_Vx_Dag",
                label: "FX_Vx_Dag",
                range: nmRange,
                target: "localhost:6672",
                path: "/strip/FX_Vx_Dag/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Scape_Vx_Dag",
                label: "Scape_Vx_Dag",
                range: nmRange,
                target: "localhost:6672",
                path: "/strip/Scape_Vx_Dag/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Vx_Jeannot",
                label: "Vx_Jeannot",
                range: nmRange,
                target: "localhost:6672",
                path: "/strip/Vx_Jeannot/Gain/Gain%20(dB)/unscaled"
            },
            {
                id: "Vocals",
                label: "Vocals",
                range: nmRange,
                target: "localhost:6666",
                path: "/strip/Vocals/Gain/Gain%20(dB)/unscaled",
                color: "#777"
            }
        ]
    }
]
