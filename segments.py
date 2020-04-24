import ProcessMVNX.bvh_import as bvh
from glob import glob

stimulus_lengths = {
    fn: len(bvh.read_bvh_motion(glob(fn)[0])[1])
    for fn in glob('bvh/*.bvh')
}

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

for ds in contact_timings:
    for i, h in enumerate(contact_timings[ds]['hold']):
        sl = stimulus_lengths[f'bvh/{ds}-training{i}.bvh']
        max_length = h[1]+12+16+2*7
        # print(ds, i, max_length, sl, max_length <= sl)
        # print(h[1]-h[0])
        mid = (h[0]+h[1])//2
        contact_timings[ds]['mid'] = mid

for ds in contact_timings:
    contact_timings[ds]['mid'] = list(map(
        lambda h: (h[0]+h[1])//2,
        contact_timings[ds]['hold']))
    contact_timings[ds]['pre'] = list(map(
        lambda m: (m[0]-19, m[0]-7),
        contact_timings[ds]['hold']))
    contact_timings[ds]['inter'] = list(map(
        lambda m: (m-6, m+6),
        contact_timings[ds]['mid']))
    contact_timings[ds]['post'] = list(map(
        lambda m: (m[1]+7, m[1]+19),
        contact_timings[ds]['hold']))

if __name__ == '__main__':
    from pprint import pprint
    pprint(contact_timings)
