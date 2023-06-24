import NextLink from 'next/link';

export const NavLink = (props: LinkProps) => {
  const { href, children, ...rest } = props;

  return (
    <NextLink href={href} className='nav-link' {...rest}>
      {children}
    </NextLink>
  );
};
