interface Wrapper {
  children: React.ReactNode;
}

interface LinkProps {
  [key: string]: any;
  href: string;
  children: React.ReactNode;
}

interface ImageProps {
  [key: string]: any;
  src: string;
  alt: string;
}

interface InputProps {
  [key: string]: any;
  type: string;
}

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  linger?: boolean;
  lingerDuration?: number;
}

interface Project {
  _id: string;
  title: string;
  url: string;
  img: StaticImageData;
}

interface Experience {
  _id: string;
  year: number;
  title: string;
  description: string;
  company: string;
  url: string;
}

interface NavLink {
  text: string;
  url: string;
}

type Callback = (args: unknown) => unknown;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class NextApiError {
  statusCode: number;
  message: string;
}
