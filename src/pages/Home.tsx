import { Genre } from "../components/Genre";

export default function Home() {
    return (
        <div className="grid grid-cols-4">
            <div className="bg-red-500 h-full hidden md:block">
            <Genre/>
            </div>
            <div className="col-span-4 md:col-span-3 bg-sky-400 h-full">Anime list</div>
        </div>
    )
}