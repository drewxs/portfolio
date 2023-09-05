import { StaticImageData } from 'next/image';

export type Project = {
  _id: string;
  title: string;
  url: string;
  img: StaticImageData;
};

export type Experience = {
  _id: string;
  year: string;
  title: string;
  description: string;
  company: string;
  url: string;
};
