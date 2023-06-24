import NextLink from 'next/link';

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
