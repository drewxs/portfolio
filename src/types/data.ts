import { StaticImageData } from 'next/image';

export type NavLink = {
  text: string;
  url: string;
};

export type Project = {
  _id: string;
  title: string;
  url: string;
  img: StaticImageData;
};

export type Experience = {
  _id: string;
  year: number;
  title: string;
  description: string;
  company: string;
  url: string;
};
