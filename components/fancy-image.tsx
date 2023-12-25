import { FC } from "react";

interface FancyImageProps {
  src: string;
  alt: string;
}

export const FancyImage: FC<FancyImageProps> = ({ src, alt }) => {
  return (
    <a href={`/${src}`} target="_blank">
      <div className="my-2 rounded-md md:rounded-lg overflow-hidden">
        <img src={`/${src}`} alt={alt} />
      </div>
    </a>
  );
};
