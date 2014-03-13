/**
 * Created by Adam-antium on 12/03/14.
 */
window._skel_config = {
    prefix : 'css/main',
    resetCSS: true,
    boxModel: 'border',
    grid : {gutters:5},
    breakpoints : {
        'sk-13plus' : {range : "1300-", containers:1280, grid : {gutters : 50}},
        'sk-961plus': {range : "961-1299", containers: 'fluid', grid : {gutters : 20}},
        'sk-600plus': {range : "600-960", containers: 'fluid', grid : {gutters : 10}},
        'sk-480plus': {range : "480-599", containers:'fluid', grid : {gutters : 5 }},
        'sk-480min' : {range : "-480", containers: 'fluid', grid : {collapse : true}}
    }
};
skel.init();