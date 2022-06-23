import { default as NextLink } from 'next/link';
import { ReactElement } from 'react';

/**
 * Link wrapper built on top of Next.js Link component.
 * Allows for additional props to be passed to the component.
 * Renders a div if no href is provided.
 *
 * @param props - Component props
 */
export const Link = (props: LinkProps): ReactElement => {
  const { href, children, ...rest } = props;

  return href ? (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  ) : (
    <div {...rest}>{children}</div>
  );
};
