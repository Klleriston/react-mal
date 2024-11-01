export function Animes({ animeList }) {
    return (
        <div className="mt-5">
            <h2 className="text-[30px] font-bold dark:text-white text-center">Season Now</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-1">
                {animeList.map((item, index) => (
                    <div
                        key={index}
                        className="
                            bg-gray-300 p-2 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 dark:bg-gray-800 dark:p-5 "

                    >
                        <img
                            src={item.images.jpg.image_url}
                            className="w-full h-[300px] rounded-lg object-contain"
                            alt={item.title}
                        />
                        <div className="mt-3">
                            <h2 className="text-[16px] dark:text-white text-black truncate whitespace-normal break-words">
                                {item.title}
                            </h2>
                            <h3 className="mt-2 text-[15px]  dark:text-white text-black">
                                Score: {item.score}
                            </h3>
                            <h3 className="mt-1 text-[15px]  dark:text-white text-black">
                                Popularity: {item.popularity}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
