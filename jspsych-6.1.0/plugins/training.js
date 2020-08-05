jsPsych.plugins['training'] = (function() {
    var plugin = {};

    plugin.info = {
        name: 'training',
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
        var T = Math.max(trainLeft.length, trainRight.length) / 24 * 1000;
        var then = performance.now()*0.001;
        left_lines = trial_txt_to_array(trainLeft);
        right_lines = trial_txt_to_array(trainRight);
        main(left_lines, '#glcanvas_l', then); // corrected right to left
        main(right_lines, '#glcanvas_r', then);
        jsPsych.pluginAPI.setTimeout(function() {
            jsPsych.finishTrial();
        }, T);
    }
    return plugin;
})();