import React, { useEffect, useState } from 'react';
import { useGetMoviesMutation } from '../../services/movieApi';
import Movies from '../Movies/Movies';
import './index.css';
import useDebounce from '../../hooks/useDebounce';


function SearchBox() {
  const [query, setQuery] = useState('');
  const debounce = useDebounce(query, 1000);
  const [getMovies, { data }] = useGetMoviesMutation();

  useEffect(() => {
    if (debounce.length > 0) fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  const fetchMovie = async () => {
    return await getMovies({ query: debounce });
  }

  return (
    <>
      <div className="search-box">
        <form className="search-box__form" onSubmit={(e) => e.preventDefault()}>
          <label className="search-box__form-label">
          Search movie:
            <input
              value={query}
              type="text"
              className="search-box__form-input"
              placeholder="For example, Shawshank Redemption"
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            disabled={!query}
          >
            Search
          </button>
        </form>
      </div>

      <div>
        {data?.Search?.length > 0 && <Movies {...data} />}


      </div>
    </>
  );
}

export default SearchBox;