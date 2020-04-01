#!/usr/bin/env python
# coding: utf-8

import numpy as np
import matplotlib.pyplot as plt
import ProcessMVNX
import numpy as np
import ProcessMVNX.bvh_import as bvh
from numpy import cos, sin
import matplotlib.pyplot as plt
from transforms3d import euler

from functools import partial

hom_unit = np.array([[0, 0, 0, 1]]).T


def Yrot(a):
    return np.array([[cos(a), 0, sin(a)], [0, 1, 0], [-sin(a), 0, cos(a)]])


def Xrot(a):
    return np.array([[1, 0, 0], [0, cos(a), -sin(a)], [0, sin(a), cos(a)]])


def Zrot(a):
    return np.array([[cos(a), -sin(a), 0], [sin(a), cos(a), 0], [0, 0, 1]])


def rotation_matrix(angles):
    # angles = angles * np.pi / 180
    z, x, y = angles[0], angles[1], angles[2]
    # R = Yrot(y).dot(Xrot(x).dot(Zrot(z)))
    # R = Yrot(y).T.dot(Xrot(x).T.dot(Zrot(z).T))
    # R = Zrot(z).dot(Xrot(x).dot(Yrot(y)))
    R = np.eye(4)
    R[:3, :3] = Zrot(z).T.dot(Xrot(x).T.dot(Yrot(y).T))
    return R


def translation_matrix(v):
    T = np.eye(4)
    T[:3, 3] = v.flatten()
    return T


def add_offset(segment, cumdict, t):
    if segment.parent:
        parent = segment.parent.name
        joint = segment.name
        Mprev, pos = cumdict[parent]

        v = segment.offset[:, None]
        R = rotation_matrix(motion[t, joint_idx[joint]])

        T = translation_matrix(v)
        M = T.dot(R)

        M = Mprev.dot(M)
        position = M.dot(hom_unit)[:3]
        cumdict[joint] = (M, position)
    else:
        v = motion[t, :3]
        R = rotation_matrix(motion[t, joint_idx["pelvis"]])
        T = translation_matrix(v)
        M = T.dot(R)
        position = M.dot(hom_unit)[:3]
        cumdict["pelvis"] = (M, position)

    if segment.end_site is not None:
        return cumdict

    for child in segment.children:
        cumdict = {**cumdict, **add_offset(child, cumdict, t)}
    return cumdict


skeleton = bvh.parse_bvh(bvh.read_file("final.bvh"))
joints, pelvis = motion = bvh.read_bvh_motion("final.bvh")
motion = np.concatenate((pelvis, joints), axis=1)

joint_idx = {s.name: slice((j + 1) * 3, (j + 2) * 3) for j, s in enumerate(skeleton)}
skdict = {s.name: s for s in skeleton}

lst = []
for t in range(len(motion)):
    cd = add_offset(skeleton[0], {}, t)
    lst.append(np.array([v[1][:3].T for k, v in cd.items()]).flatten() / 20)
P = np.array(lst)

round3 = partial(round, ndigits=3)
s = ""
for line in P:
    for _ in range(1):
        s += ";".join(map(str, map(round3, list(line))))
        s = s + "\n"
fn = "path.txt"
with open(fn, "w") as fo:
    fo.write(s)

import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

fig = plt.figure()
ax = fig.add_subplot(111, projection="3d")

ax.axis("equal")

joint_idx = {s.name: slice((j + 0) * 3, (j + 1) * 3) for j, s in enumerate(skeleton)}
joints = [
    "pelvis",
    "spine1",
    "spine2",
    "pelvis_right_femur",
    "right_femur_tibia",
    "right_tibia_foot",
    "pelvis_left_femur",
    "neck",
    "right_manubrium",
    "right_clavicle",
    "right_humerus",
    "right_radius",
    "left_manubrium",
    "left_clavicle",
    "left_humerus",
    "left_radius",
]
for joint in joints:
    x, y, z = P[20, joint_idx[joint]]
    ax.plot([x], [y], [z], "o", markersize=10, label=joint)
ax.legend()
plt.show()
