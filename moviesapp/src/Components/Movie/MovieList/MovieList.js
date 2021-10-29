import React from 'react';
import MovieItem from "../MovieItem/MovieItem";
import "./MovieList.css";

export default function MovieList({ movies, Loading }) {

  if (Loading) {

    return <h2>Loading....</h2>
  }
  return (
    <>
      {!Loading ? (

        movies.map((movie, index) => (
          <MovieItem movie={movie} />
        ))

      ) : (

        <h2 className="text-white">IsLoading ...</h2>
      )

      }


    </>
  )
}