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
        <div className="relative my-2 h-max w-full overflow-hidden rounded-md md:rounded-lg">
          <Image
            src={src}
            alt={alt ?? ""}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
      </a>
      <br className="select-none" />
    </div>
  );
};
