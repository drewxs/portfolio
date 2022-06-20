import { default as NextImage } from 'next/image';

/**
 * Image wrapper component.
 * Wrapper built on top of Next.js Image component.
 * Allows for additional props to be passed to the component.
 * Sets the image as decorative if no alt tag is provided.
 *
 * @param {object} props - component props
 * @returns {JSX.Element} - rendered component
 */
export const Image = (props: ImageProps) => {
  const { src, alt, ...rest } = props;

  return <NextImage src={src} alt={alt ?? ''} {...rest} />;
};
