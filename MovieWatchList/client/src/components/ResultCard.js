import React from "react";

export const ResultCard = ({ movie }) => {
  return (
    <div>
      <div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>
    </div>
  );
};
