import { FC } from "react";

interface FancyYoutubeEmbedProps {
  videoId: string;
}

export const FancyYoutubeEmbed: FC<FancyYoutubeEmbedProps> = ({ videoId }) => {
  return (
    <div>
      <br className="select-none" />
      <div className="w-full aspect-video bg-neutral-300 dark:bg-neutral-800 rounded-md overflow-hidden">
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
        ></iframe>
      </div>
      <br className="select-none" />
    </div>
  );
};
