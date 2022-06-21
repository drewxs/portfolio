import { Typewriter } from './components/typewriter';

interface LayoutProps {
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

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  linger?: boolean;
  lingerDuration?: number;
}
