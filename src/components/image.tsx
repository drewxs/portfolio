import NextImage from 'next/image';

export const Img = (props: ImageProps) => {
  const { src, alt, ...rest } = props;

  return <NextImage src={src} alt={alt ?? ''} {...rest} />;
};
