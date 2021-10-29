import React, { useState, useEffect } from 'react';
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";
export default function Wishlist() {

  const _movies = useSelector((state) => state.movies);
  const [loading, setLoading] = useState(false);

  console.log(_movies);
  return (
    <>
      <section className="pt-2">
        <div className="container">
          <div className="row">
            <MovieList movies={_movies} loading={loading} />
          </div>
        </div>
      </section>
    </>
  );
}
