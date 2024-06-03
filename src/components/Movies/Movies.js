import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './index.css';

function Movies({ Search }) {
    return (
        <ul className="movies">
            {/* {renderMovie} */}
            {Search?.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>
    );
}

export default Movies;