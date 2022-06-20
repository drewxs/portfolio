import { default as NextLink } from 'next/link';

/**
 * Link wrapper component.
 * Wrapper built on top of Next.js Link component.
 * Allows for additional props to be passed to the component.
 * Renders a div if no href is provided.
 *
 * @param {object} props - component props
 * @returns {JSX.Element} - rendered component
 */
export const Link = (props: LinkProps) => {
  const { href, children, ...rest } = props;

  return href ? (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  ) : (
    <div>
      <a {...rest}>{children}</a>
    </div>
  );
};
