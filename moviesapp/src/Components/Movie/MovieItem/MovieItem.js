import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router";

import { setCounter, updateWishlist, removeItem } from "../../../Store/Action";
import "./MovieItem.css"
export default function MovieItem({ movie }) {
  // const movies = useSelector((state) => state.movies);

  const History = useHistory();
  const dispatch = useDispatch();
  let flag = false;
  if (History.location.pathname === '/wishlist')
    flag = true
  else
    flag = false

  // console.log(History)


  const addToWishlist = () => {
    // console.log(movie)
    // dispatch(setCounter(movies + 1))
    dispatch(updateWishlist(movie))
  }

  const removeItemFromWishList = index => {

    dispatch(removeItem(index)
    );
  };
  return (
    <>
      {
        flag ? (

          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="card  mb-5" >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top" alt="..."
              />
              <div className="card-body ">
                <h6 className="card-title ">{movie.title}</h6>
                <small className="card-text "><span className="fw-bold">ReleaseDate:</span> {movie.release_date}</small>


              </div>
              <div className="card-footer border-top-5  d-flex justify-content-between">

                <Link to={`/movie/${movie.id}`} className="btn btn-outline-primary btn-sm rounded-0 ">
                  View Details
                </Link>
                <span onClick={() => removeItemFromWishList(movie)} type="button" className="btn btn-danger btn-sm rounded-0" >Remove</span>

              </div>
            </div>
          </div>

        ) :
          (

            <div className="col-lg-4 col-md-6 col-12">
              <div className="card  mb-5" >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top" alt="..."
                />
                <div className="card-body ">
                  <h6 className="card-title ">{movie.title}</h6>
                  <small className="card-text "><span className="fw-bold">ReleaseDate:</span> {movie.release_date}</small>


                </div>
                <div className="card-footer border-top-5  d-flex justify-content-between">

                  <Link to={`/movie/${movie.id}`} className="btn btn-outline-primary btn-sm rounded-0 ">
                    View Details
                  </Link>
                  <span onClick={() => addToWishlist(movie)} type="button" className="btn btn-primary btn-sm rounded-0" >Add To Wishlist</span>

                </div>
              </div>
            </div>

          )

      }



    </>
  );
}


