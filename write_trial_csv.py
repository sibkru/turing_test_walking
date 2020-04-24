from glob import glob
import os
import re
import itertools as it

inparenthesis = re.compile('\([a-zA-Z0-9\-]*\)')
beforeparenthesis = re.compile('[a-zA-Z0-9]*\(')


def parse_filename(s: str) -> dict:
    """
    Finds numbers in brackets, associates this value
    with a key in front of the bracket.
    Returns Series like {'model': 'vcgpdm',...}
    """
    A = map(remove_brackets, re.findall(inparenthesis, s))
    B = map(remove_brackets, re.findall(beforeparenthesis, s))
    return {b: a for a, b in zip(A, B)}


def remove_brackets(s):
    s = s.replace('(', '').replace(')', '')
    try:
        return int(s)
    except ValueError:
        return s


def get_model_str_from_fp(s: str) -> str:
    return s.split(os.sep)[2]


def available_condition(ds, c):
    if 'hold' in ds and c == 24:
        return False
    else:
        return True


def get_train_fn(fn, glprim):
    d = parse_filename(fn)
    ds = d['dataset']
    hold = d['hold']
    return f'bvh/{ds}-training{hold}-{glprim}.txt'


glprimitive = 'lines'
if glprimitive == 'points':
    fns = glob('bvh/vr_prediction_models/*/final.txt')
elif glprimitive == 'lines':
    fns = glob('bvh/vr_prediction_models/*/final-lines.txt')
# print(parse_filename(get_model_str_from_fp(fns[0])))

import segments
timings = segments.contact_timings

# conds = {'a': (37, 53), 'b': (17, 33),
#          'c': (57, 73), 'd': (47, 63)}
conds = ['pre', 'inter', 'post']

orders = ['training_first', 'model_first']
holds = range(5)

lst = [(fn, get_train_fn(fn, glprimitive),
        timings[parse_filename(fn)['dataset']][c][parse_filename(fn)['hold']],
        order)
       for fn, c, order
       in it.product(fns, conds, orders)]

datasets = ['pass-bottle-hold',
            'pass-bottle',
            'return-bottle',
            'return-bottle-hold']
# catch_conds = {'a': (37, 53), 'b': (17, 33)}
shifts = [9, 16, 24]
catch_trials = [(f'bvh/{ds}-training{hold}-{glprimitive}.txt',
                 timings[ds][c][hold], order, offs)
                for ds, hold, c, order, offs
                in it.product(
                    datasets, range(5), conds, orders, shifts
                )
                if available_condition(ds, offs)]
s = ''
for fn_train, (a, b), o, offs in catch_trials:
    s += fn_train + ';'
    s += str(a) + ';'
    s += str(b) + ';'
    s += str(offs) + ';'
    s += str(o)
    s += '\n'
print('write catch_trial.csv')
with open('catch_trials.csv', 'w') as fo:
    fo.write(s)

s = ''
for fn, fn_train, (a, b), o in lst:
    s += fn.split('.')[0] + '.txt' + ';'
    s += fn_train + ';'
    s += str(a) + ';'
    s += str(b) + ';'
    s += str(o)
    s += '\n'

print('write trial.csv')
with open('trials.csv', 'w') as fo:
    fo.write(s)
