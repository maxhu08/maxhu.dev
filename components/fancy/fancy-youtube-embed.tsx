import { FC } from "react";

interface FancyYoutubeEmbedProps {
  videoId: string;
}

export const FancyYoutubeEmbed: FC<FancyYoutubeEmbedProps> = ({ videoId }) => {
  return (
    <div>
      <br className="select-none" />
      <div className="aspect-video w-full overflow-hidden rounded-md bg-neutral-300 dark:bg-neutral-800">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
        ></iframe>
      </div>
      <br className="select-none" />
    </div>
  );
};
