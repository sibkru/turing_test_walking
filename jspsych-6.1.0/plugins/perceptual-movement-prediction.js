jsPsych.plugins['perceptual-movement-prediction'] = (function() {
    var plugin = {};

    plugin.info = {
        name: 'perceptual-movement-prediction',
        parameters: {
            stimulus: {
                type: jsPsych.plugins.parameterType.STRING,
                pretty_name: 'filename',
                default: null,
                description: 'filename.'
            }
        }
    }

    plugin.trial = function(display_element, trial){
        setupCanvas();
        console.log(trial.stimulus);
        main(trial.stimulus);
        jsPsych.pluginAPI.setTimeout(function() {
            jsPsych.finishTrial();
        }, 7000);
    }

    return plugin;
})();

