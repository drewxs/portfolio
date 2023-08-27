import crylog from 'public/projects/crylog.webp';
import easyredir from 'public/projects/easyredir.webp';
import raven from 'public/projects/raven.gif';

import { Project } from '@/types';

export const projects: Project[] = [
  {
    _id: '01',
    title: 'Raven',
    url: 'https://github.com/drewxs/raven',
    img: raven,
  },
  {
    _id: '02',
    title: 'Crylog',
    url: 'https://github.com/drewxs/crylog',
    img: crylog,
  },
  {
    _id: '03',
    title: 'EasyRedir',
    url: 'https://www.easyredir.com',
    img: easyredir,
  },
];
