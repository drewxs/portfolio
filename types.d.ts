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
