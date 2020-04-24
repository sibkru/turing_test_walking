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
    if ds == 'pass-bottle-hold' and c == 'c':
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
print(parse_filename(get_model_str_from_fp(fns[0])))

conds = {'a': (37, 53), 'b': (17, 33),
         'c': (57, 73), 'd': (47, 63)}

contact_timings = {
    'pass-bottle-hold': {
        'hold': [(34, 35),
                 (32, 33),
                 (32, 33),
                 (38, 39),
                 (42, 43)]
    },
    'pass-bottle': {
        'hold': [(73, 91),
                 (45, 78),
                 (57, 85),
                 (64, 80),
                 (63, 77)]
    },
    'return-bottle': {
        'hold': [(38, 70),
                 (47, 72),
                 (48, 85),
                 (46, 72),
                 (57, 74)]
    },
    'return-bottle-hold': {
        'hold': [(65, 66),
                 (34, 35),
                 (39, 40),
                 (35, 36),
                 (35, 36)]
    }
}

orders = ['training_first', 'model_first']
holds = range(5)

lst = [(fn, get_train_fn(fn, glprimitive), conds[c], order)
       for fn, c, order
       in it.product(fns, conds, orders)
       if available_condition(parse_filename(fn)['dataset'], c)]

datasets = ['pass-bottle-hold',
            'pass-bottle',
            'return-bottle',
            'return-bottle-hold']
catch_conds = {'a': (37, 53), 'b': (17, 33)}
catch_trials = [(f'bvh/{ds}-training{hold}-{glprimitive}.txt',
                 conds[c], order, offs)
                for ds, hold, c, order, offs
                in it.product(
                    datasets, range(5), catch_conds, orders, [9, 16, 24]
                )
                if available_condition(ds, c)]
s = ''
for fn_train, (a, b), o, offs in catch_trials:
    s += fn_train + ';'
    s += str(a) + ';'
    s += str(b) + ';'
    s += str(offs) + ';'
    s += str(o)
    s += '\n'
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

with open('trials.csv', 'w') as fo:
    fo.write(s)
