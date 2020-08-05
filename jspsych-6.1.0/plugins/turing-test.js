jsPsych.plugins['turing-test'] = (function() {
    var plugin = {};

    plugin.info = {
        name: 'turing-test',
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
        var T = Math.max(trial.stimulus.left.length, trial.stimulus.right.length) / 24 * 1000;
        var then = performance.now()*0.001;
        left_lines = trial_txt_to_array(trial.stimulus.left);
        right_lines = trial_txt_to_array(trial.stimulus.right);
        main(left_lines, '#glcanvas_l', then);
        main(right_lines, '#glcanvas_r', then);
        jsPsych.pluginAPI.setTimeout(function() {
            jsPsych.finishTrial();
        }, T);
    }
    return plugin;
})();
