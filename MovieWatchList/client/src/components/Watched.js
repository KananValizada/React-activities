import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <span className="count-pill">{watched.length}</span>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => {
              return <MovieCard movie={movie} type="watched" />;
            })}
          </div>
        ) : (
          <h2 className="no-movies">No movies in watchlist add some</h2>
        )}
      </div>
    </div>
  );
};
