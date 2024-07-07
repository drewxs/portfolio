import NextImage, { ImageProps as DefaultImageProps, StaticImageData } from "next/image";

type ImageProps = DefaultImageProps & {
  src: StaticImageData;
  alt: string;
};

export const Img = (props: ImageProps) => {
  const { src, alt, ...rest } = props;

  return <NextImage src={src} alt={alt ?? ""} quality={100} {...rest} />;
};
