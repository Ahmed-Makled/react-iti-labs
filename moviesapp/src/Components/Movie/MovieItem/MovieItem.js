import React from "react";

import { Link } from "react-router-dom";
import "./MovieItem.css"
export default function MovieItem({movies,Loading}) {
  if (Loading) {

    return    <h2>Loading....</h2>
  }
  
  
  
  return (
    <>
      {movies.map((movie, index) => (
        <div className="col-4">
          <div class="card  mb-5 bg-dark text-white" >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              class="card-img-top"
            />
            <div class="card-body text-center">
              <h6 class="card-title">{movie.title}</h6>
            
            </div>
            <div class="card-footer border-top-5  d-flex justify-content-between">
            <small class="card-text ">ReleaseDate: {movie.release_date}</small>

            <Link  class="btn btn-outline-secondary btn-sm ">
               View Details
              </Link>
         </div>
          </div>
        </div>
      ))}
    </>
  );
}


