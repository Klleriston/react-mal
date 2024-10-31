import { useEffect, useState } from "react";
import { Genre } from "../components/Genre";
import { getAllAnimes } from "../services/GlobalApi";
import { Video } from "../components/Video";

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
        <div className="flex px-8">
            <div className="h-full hidden md:block">
                <Genre />
            </div>
            <div className="h-full w-full align-middle flex">
                {isLoading ? (
                    <p>Carregando...</p>
                ) : (
                    allAnimeList?.length > 0 && <Video animeTrailler={allAnimeList[0]} />
                )}
            </div>
            <div>
               
            </div>
            
        </div>
    );
}
