/**
 * Created by Adam-antium on 12/03/14.
 */
window._skel_config = {
    prefix : 'css/main',
    resetCSS: false,
    boxModel: 'border',
    grid : {gutters:5},
    breakpoints : {
        'e-wide' : {range : "1300-", containers:1280, grid : {gutters : 50}},
        'd-desktop': {range : "961-1299", containers: 'fluid', grid : {gutters : 20}},
        'c-tablet': {range : "600-960", containers: 'fluid', grid : {gutters : 10}},
        'b-phonetablet': {range : "481-599", containers:'fluid', grid : {gutters : 5 }},
        'a-phone' : {range : "-480", containers: 'fluid', grid : {collapse : true}}
    }
};