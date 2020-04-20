# Online Version of Johannes VR-Prediction Experiment

## Setup

After cloning this repo, you need to get the data and
produce the files needed by javascript.

- generated data is in: ./bvh/vr_prediction_models/{model_str}/final.bvh
- training data: ./bvh/{dataset}-training{hold}.bvh

Then run `python write_test_path.py` to convert bvh in
positions needed by js, and then `python write_trial_csv.py`
to make the trial-list for the experiment.

### Test on local machine

- `php -S 0.0.0.0:8000`
- In Browser: localhost:8000/experiment.html

## TODO:

- [X] let user submit ID
- [ ] Check occlusion timings
- [X] update frames with correct frame rate
- [.] Reuse gl-canvas
- [ ] Training trials
- [ ] User instructions
- [ ] Replace joint markers
- [ ] fix camera orientation

