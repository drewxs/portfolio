import NextLink from 'next/link';

interface LinkProps {
  [key: string]: any;
  href: string;
  children: React.ReactNode;
}

export const Link = (props: LinkProps) => {
  const { href, children, ...rest } = props;

  return href ? (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  ) : (
    <div {...rest}>{children}</div>
  );
};
