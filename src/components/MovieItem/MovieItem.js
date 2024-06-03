import './index.css';
import { useDispatch } from 'react-redux';
import { addMoviesToFavorites } from '../../store/movieSlice';

function MovieItem({ imdbID, Title, Year, Poster }) {
    const mv = { imdbID, Title, Year, Poster }
    const dispatch = useDispatch();
    
    const addToFavorites = () => {
        dispatch(addMoviesToFavorites(mv))
    };

    return (
        <article className="movie-item" key={imdbID}>
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button type="button" className="movie-item__add-button" onClick={() => addToFavorites()} > Добавить в список</button>
            </div>
        </article >
    );
}

export default MovieItem;