import json
import glob
import os
import pandas as pd
from datetime import datetime

def load_data(json_fps):
    Dfs = []
    for fp in json_fps:
        df_fn = 'temp_data/' + fp.split('/')[-1]
        if os.path.exists(df_fn):
            Df = pd.read_json(df_fn)
        else:
            with open(fp) as fo:
                d = json.load(fo)

            Df = pd.DataFrame(d)
            return Df
            date = datetime.utcfromtimestamp(os.path.getmtime(fp))
            try:
                Df = preprocess(Df)
                try:
                    t, c = Df.shape
                except ValueError:
                    continue
                if t > 10 and c == 18:
                    Df.to_json(df_fn)
                else:
                    continue
                print('loading', fp, Df.shape, end=':')
            except AttributeError:
                print("AttributeError",fp)
                print(Df.shape)
                continue
            print(date.strftime("%m-%d- %H:%M"))
        Dfs.append(Df)
    return Dfs


def preprocess(Df):
    df = Df[Df.test_part == 'response']
    return df

    def get_fn(row):
        return row['fn'].split('/')[-2]

    df.drop(columns=['rt', 'stimulus'], inplace=True)
    df.loc[:, 'fn'] = df.loc[:, 'test_stimulus'].apply(
        get_fn)
    df.loc[:, 'order'] = df.apply(
        lambda x: x['test_stimulus']['order'], axis=1)
    df.loc[:, 'vp_correct'] = df.apply(
        is_correct_response, axis=1)
    df.loc[:, 'result'] = 1 - df.loc[:, 'vp_correct']
    df = df.apply(add_partial_mse, axis=1)

if __name__ == '__main__':
    fns = glob.glob('data/*.json')
    print(fns)
    data = load_data(fns)
