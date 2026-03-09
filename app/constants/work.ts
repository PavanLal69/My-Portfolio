import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2022',
    title: 'St. Joseph Public School',
    subtitle: 'ICSE',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2022 - 2024',
    title: 'Sri Chaitanya',
    subtitle: 'Intermediate',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2024 - Present',
    title: 'Aurora University',
    subtitle: 'Pursuing',
    position: 'right',
  },
  {
    point: new THREE.Vector3(1, 1, -10),
    year: '2024',
    title: 'Micro IT',
    subtitle: 'Internship',
    position: 'left',
  },
]