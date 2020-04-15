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


def available_condition(fn, c):
    ds = parse_filename(fn)['dataset']
    if ds == 'pass-bottle-hold' and c == 'c':
        return False
    else:
        return True


def get_train_fn(fn, hold):
    ds = parse_filename(fn)['dataset']
    return f'bvh/{ds}-training{hold}.txt'


fns = glob('bvh/generated/*/*.bvh')
print(parse_filename(get_model_str_from_fp(fns[0])))

conds = {'a': (30, 70), 'b': (10, 40),
         'c': (50, 80), 'd': (50, 70)}
orders = ['training_first', 'model_first']
holds = range(5)

lst = [(fn, get_train_fn(fn, hold), conds[c], order)
       for fn, c, hold, order
       in it.product(fns, conds, holds, orders)
       if available_condition(fn, c)]

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
