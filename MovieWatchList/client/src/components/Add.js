import axios from "axios";
import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value);

    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=d6d2812ef5093d6c33aa251858128d9a&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => setResults(res.data.results))
      .catch((error) => {
        setResults([]);
        console.log(error);
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
