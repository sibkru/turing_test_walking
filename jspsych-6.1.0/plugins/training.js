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
        var leftTrial  = trial_txt_to_array(trainLeft);
        var rightTrial = trial_txt_to_array(trainRight);
        
        // implement same trial length
        var l = leftTrial.length - 1;
        var r = rightTrial.length - 1;
        if (l > r){
           left_lines = leftTrial.slice(0, r);
           right_lines = rightTrial.slice(0, r);
        } else {
            left_lines = leftTrial.slice(0, l);
            right_lines = rightTrial.slice(0, l);
        }
        console.log(left_lines, right_lines);
        main(left_lines, '#glcanvas_l', then); // corrected right to left
        main(right_lines, '#glcanvas_r', then);
        jsPsych.pluginAPI.setTimeout(function() {
            jsPsych.finishTrial();
        }, T);
    }
    return plugin;
})();