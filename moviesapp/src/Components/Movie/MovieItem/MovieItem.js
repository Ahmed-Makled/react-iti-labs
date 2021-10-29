import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { updateWishlist } from "../../../Store/Action";
import "./MovieItem.css"
export default function MovieItem({movie}) {

  // console.log(_movies)

  const dispatch = useDispatch()
  const addToWishlist = () => {
    // console.log(movie)
    dispatch(updateWishlist(movie))
}
  return (
    <>

      <div className="col-4">
        <div className="card  mb-5 bg-dark text-white" >
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="card-img-top"
          />
          <div className="card-body d-flex">
            <h6 className="card-title d">{movie.title}</h6>

         <button onClick={()=>addToWishlist(movie)} type="button" className="btn btn-primary btn-sm" >AddToWIshlist</button>

          </div>
          <div className="card-footer border-top-5  d-flex justify-content-between">
            <small className="card-text ">ReleaseDate: {movie.release_date}</small>

            <Link to={`/movie/${movie.id}`}  className="btn btn-outline-secondary btn-sm ">
              View Details
            </Link>
          </div>
        </div>
      </div>


    </>
  );
}


