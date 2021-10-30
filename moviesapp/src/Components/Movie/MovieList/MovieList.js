import React from 'react';
import MovieItem from "../MovieItem/MovieItem";
import Spinner from 'react-bootstrap/Spinner'
import "./MovieList.css";

export default function MovieList({ movies, Loading }) {

  console.log(movies)
  if (Loading) {

    return <h2>Loading....</h2>
  }
  return (
    <>
      {movies ? (

        movies.map((movie, index) => (
          < MovieItem movie={movie} />
        ))

      ) : (


        <div className="d-flex justify-content-center ">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" /> </div>

      )

      }


    </>
  )
}