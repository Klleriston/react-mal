import { useEffect } from 'react';
import { getGenreList } from '../services/GlobalApi';

export function Genre() {
    useEffect(() => {
        getGenreList()
            .then((resp) => {
                console.log(resp.data.data);  
            })
            .catch((error) => {
                console.error("Error fetching genres:", error);
            });
    }, []);

    return (
        <div>
            Genre List ----
        </div>
    );
}
