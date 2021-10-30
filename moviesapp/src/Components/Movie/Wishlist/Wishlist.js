import React, { useEffect, useState } from 'react';
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";
export default function Wishlist() {
  const _movies = useSelector((state) => state.wishlist.movies);

  const [loading] = useState(false);


  useEffect(() => {
    console.log(_movies);

  }, [_movies]);

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
