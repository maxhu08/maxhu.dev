import { FC } from "react";
import Image from "next/image";

interface SimpleImageProps {
  src: string;
  alt: string;
}

export const SimpleImage: FC<SimpleImageProps> = ({ src, alt }) => {
  return (
    <a href={`/${src}`} target="_blank">
      <div className="my-2 rounded-md md:rounded-lg overflow-hidden relative w-full h-max">
        <Image
          src={`/${src}`}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </a>
  );
};
