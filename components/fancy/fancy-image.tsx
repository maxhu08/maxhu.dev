import Image from "next/image";
import { FC } from "react";

interface FancyImageProps {
  src: string;
  alt?: string;
}

export const FancyImage: FC<FancyImageProps> = ({ src, alt }) => {
  return (
    <div>
      <br className="select-none" />
      <a href={src} target="_blank">
        <div className="my-2 rounded-md md:rounded-lg overflow-hidden relative w-full h-max">
          <Image
            src={src}
            alt={alt ?? ""}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </a>
      <br className="select-none" />
    </div>
  );
};
