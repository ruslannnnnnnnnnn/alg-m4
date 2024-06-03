import { useSelector } from 'react-redux';
import { useGetMovieByIdQuery } from '../../services/saveListApi';
import { selectAllSaveListId } from '../../store/movieSlice';
import { selectAllFavoriteMovies } from '../../store/movieSlice';

import './index.css';

function ListPage() {

    const favoritesList = useSelector(selectAllFavoriteMovies);

    const saveListId = useSelector(selectAllSaveListId);
    const { data: movie, error, isLoading } = useGetMovieByIdQuery(saveListId[0]);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error.message}</div>;
    }
    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список {movie.title}</h1>
            <ul>
                {favoritesList?.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank" rel="noreferrer">{item.Title} ({item.Year})</a>
                        </li>

                    );
                })}
            </ul>
        </div>
    );
}

export default ListPage;