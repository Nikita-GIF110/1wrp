import type { LazyLoadProps } from "react-lazyload";
import LazyLoad from "react-lazyload";

interface LazyImageProps extends LazyLoadProps {
  src: string;
  alt?: string;
  title?: string;

  width: number | string;
}

export const LazyImage = ({
  src,
  alt,
  title,
  offset = 100,
  height,
  width,
  ...lazyLoadImageProps
}: LazyImageProps) => (
  <LazyLoad {...lazyLoadImageProps} offset={offset}>
    <img src={src} alt={alt} title={title} height={height} width={width} />
  </LazyLoad>
);
