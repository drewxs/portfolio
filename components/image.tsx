import NextImage from 'next/image';
import { ReactElement } from 'react';

/**
 * Image wrapper built on top of Next.js Image component.
 * Allows for additional props to be passed to the component.
 * Sets the image as decorative if no alt tag is provided.
 *
 * @param props - Component props
 * @returns Image component
 */
export const Img = (props: ImageProps): ReactElement => {
	const { src, alt, ...rest } = props;

	return <NextImage src={src} alt={alt ?? ''} {...rest} />;
};
