import { useEffect } from "react";

interface AnimeTrailer {
  title_english: string;
  title_japanese: string;
  trailer: {
    youtube_id: string;
  };
  synopsis: string
  episodes: number;
  popularity: number;
}

export function Video({ animeTrailler }: { animeTrailler: AnimeTrailer }) {
  useEffect(() => {
    console.log(animeTrailler);
  });

  return (
    <div className="flex flex-col lg:flex-row m-4">
      <div className="flex flex-col lg:w-1/2">
        <h1 className="text-2xl lg:text-4xl font-bold dark:text-white mt-2">
          {animeTrailler.title_english} ({animeTrailler.title_japanese})
        </h1>
        <h2 className="font-bold dark:text-white mt-2">
          Episodes: {animeTrailler.episodes}
        </h2>
        <h3 className="font-bold dark:text-white mt-2 break-words">
            Popularity: {animeTrailler.popularity}%
        </h3>
        <h3 className="font-bold dark:text-white mt-2 break-words">
          Synopsis: {animeTrailler.synopsis}
        </h3>
        

      </div>
      <div className="flex justify-center lg:w-1/2">
      <iframe
        className="bsolute top-0 h-[500px] w-[1000px] flex rounded-3xl"
        src={`https://www.youtube.com/embed/${animeTrailler.trailer.youtube_id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
}
