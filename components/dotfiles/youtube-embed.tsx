import { FC } from "react";

interface YoutubeEmbedProps {
  videoId: string;
}

export const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ videoId }) => {
  return (
    <div className="w-full aspect-video bg-neutral-300 dark:bg-neutral-800 rounded-md overflow-hidden my-2">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};
