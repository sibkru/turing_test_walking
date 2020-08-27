function rand_att_check(){
    if (Math.random() < 0.5){
        return 'left';
    } else {return 'right';}
}

function create_check() { 
    var x = [{'fn_train': 'bvh/return-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(70)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(50)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(50)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(70)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(30)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(90)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(90)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(10)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(70)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(50)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(30)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(10)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(60)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(90)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(20)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(70)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(80)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(100)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(10)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(50)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(40)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(100)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(10)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(30)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(10)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(30)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(80)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(20)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(40)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(90)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(20)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(20)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(30)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(30)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(60)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(80)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(20)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(90)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(80)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(90)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(40)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(90)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(100)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(70)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(30)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(70)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(50)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(30)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(60)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(10)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(20)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(100)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(10)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(70)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(50)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(60)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(90)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(80)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(30)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(10)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(90)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(20)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(70)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(80)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(100)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(40)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(70)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(100)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(80)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(20)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(60)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn': '', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(20)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(100)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(70)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(20)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(80)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(30)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(90)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(60)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(10)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(90)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(90)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(60)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(50)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(30)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(100)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(100)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(50)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(60)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(80)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(80)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(50)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(70)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(70)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(40)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(20)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(40)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(80)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(70)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(70)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(100)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(60)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(40)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(40)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(40)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(90)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(10)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(60)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(60)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(80)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(100)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(80)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(20)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(50)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(90)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(30)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(100)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(20)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(60)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(90)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(60)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(10)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(100)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(30)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(70)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(10)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(40)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(40)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(80)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(50)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(70)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(80)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(90)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(20)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(30)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(40)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(30)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(10)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(60)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(50)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(80)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(40)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(50)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(30)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(20)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(60)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(10)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(40)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(30)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(30)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(50)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(20)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(100)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(40)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(50)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(100)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(30)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(20)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(20)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(80)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(40)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(70)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(90)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(50)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(90)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(100)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(90)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(30)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(40)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(100)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(10)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(100)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(70)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(80)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(40)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(40)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(10)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(80)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(50)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(50)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(60)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(10)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(10)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(50)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(20)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(60)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(10)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training1-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(90)-hold(1)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(20)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(10)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(40)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle)-npsi(60)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(80)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(70)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training2-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(50)-hold(2)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(100)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training0-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(100)-hold(0)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/pass-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(pass-bottle-hold)-npsi(60)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-training4-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle)-npsi(60)-hold(4)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}, 
{'fn_train': 'bvh/return-bottle-hold-training3-lines.txt', 'fn': 'bvh/vr_prediction_models/model(dmp)-dataset(return-bottle-hold)-npsi(70)-hold(3)/final-lines.txt', 'occ_start': 1, 'occ_end': 2}]
return x;
}