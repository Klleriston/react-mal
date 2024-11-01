import { useEffect, useState } from "react";
import { Genre } from "../components/Genre";
import { getAllAnimes } from "../services/GlobalApi";
import { Video } from "../components/Video";
import { Animes } from "../components/Animes";

export default function Home() {
    const [allAnimeList, setAllAnimeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchAnimeList = async () => {
            const cachedData = localStorage.getItem("animeList");
            if (cachedData) {
                setAllAnimeList(JSON.parse(cachedData));
                setIsLoading(false);
            } else {
                try {
                    const resp = await getAllAnimes();
                    setAllAnimeList(resp.data.data);
                    localStorage.setItem("animeList", JSON.stringify(resp.data.data));
                } catch (error) {
                    console.error("Error fetching genres:", error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchAnimeList();
    }, []);

    return (
        <div className="flex flex-col md:flex-row px-8">
            <div className="h-full hidden md:block">
                <Genre/>

            </div>

            <div className="h-full w-full align-middle flex flex-col items-center">
                {isLoading ? (
                    <p>Carregando...</p>
                ) : (
                    allAnimeList?.length > 0 && (
                        <div className="flex flex-col items-center">
                            <Video animeTrailler={allAnimeList[0]} />
                        </div>
                    )
                )}
                <Animes animeList={allAnimeList} />
            </div>
        </div>
    );
}
