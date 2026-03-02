"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Skeleton } from "~/components/ui/skeleton";
import { cn } from "~/utils/cn";

interface FancyImageProps {
  src: string | StaticImageData;
  alt?: string;
}

export function FancyImage({ src, alt }: FancyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageWidth = typeof src === "string" ? undefined : src.width;
  const imageHeight = typeof src === "string" ? undefined : src.height;
  const aspectRatio = imageWidth && imageHeight ? `${imageWidth} / ${imageHeight}` : undefined;
  const href = typeof src === "string" ? src : src.src;

  return (
    <div>
      <br className="select-none" />
      <a href={href} target="_blank" rel="noreferrer">
        <div
          className="relative my-2 h-max w-full overflow-hidden rounded-md md:rounded-lg"
          style={aspectRatio ? { aspectRatio } : undefined}
        >
          {!isLoaded && <Skeleton className="absolute inset-0 h-full w-full rounded-none" />}
          <Image
            src={src}
            alt={alt ?? ""}
            width={imageWidth ?? 0}
            height={imageHeight ?? 0}
            sizes="100vw"
            className={cn(
              "h-auto w-full duration-300",
              !isLoaded && "opacity-0",
              isLoaded && "opacity-100"
            )}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </a>
      <br className="select-none" />
    </div>
  );
}
