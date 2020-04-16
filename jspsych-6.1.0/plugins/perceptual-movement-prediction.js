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
        },
        choices: {
            type: jsPsych.plugins.parameterType.KEYCODE,
            pretty_name: 'Choices',
            array: true,
            default: jsPsych.ALL_KEYS,
            description: 'The keys the subject is allowed to press to respond to the stimulus.'
        },
    }

    plugin.trial = function(display_element, trial){
        // console.log(trial.stimulus);
        var train = loadFile(trial.fn_train).split('\n');
        var T = train.length / 24 * 1000
        console.log(train.length / 24 * 1000)
        main(trial.stimulus);
        jsPsych.pluginAPI.setTimeout(function() {
            jsPsych.finishTrial();
        }, T);
    }

    return plugin;
})();

