import { useEffect, useState } from 'react';
import { getGenreList } from '../services/GlobalApi';

export function Genre() {
    const [genreList, setGenreList] = useState<{ name: string }[]>([]);
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        getGenreList()
            .then((resp) => {
                setGenreList(resp.data.data)
            })
            .catch((error) => {
                console.error("Error fetching genres:", error);
            });
    }, []);

    return (
        <div>
            <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
            {genreList.map((item, index) => (
                <div key={index}
                    onClick={() => { setActiveIndex(index); }}
                    className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg dark:hover:bg-gray-600 hover:scale-100 transition-all ease-out duratio-500 ${activeIndex == index ? 'bg-gray-200 dark:bg-gray-600' : null}`} >
                    <h3 className={`font-mono dark:text-white houver:font-bolder transition-all ease-out duratio-500 ${activeIndex == index ? 'font-bold' : null}`}>{item.name}</h3>
                </div>
            ))
            }
        </div >
    );
}
