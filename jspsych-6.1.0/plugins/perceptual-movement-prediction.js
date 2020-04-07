jsPsych.plugins['perceptual-movement-prediction'] = (function() {
    var plugin = {};

    plugin.info = {
        name: 'perceptual-movement-prediction',
        parameters: {
        }
    }

    plugin.trial = function(display_element, trial){
        setupCanvas();
        main();
        jsPsych.pluginAPI.setTimeout(function() {
            jsPsych.finishTrial();
        }, 7000);
    }

    return plugin;
})();

