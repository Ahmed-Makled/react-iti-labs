import React from "react";
import MovieList from "./MovieList/MovieList";
import "./Movie.css"
import MyPagination from "./Pagination/Pagination";
export default function MovieApp() {

  return <>

{/* 
    <section className="pt-2 text-center">
      <div className="container">
        <div className="row ">
          <div className="col-6 m-auto">


  <MyPagination />
         

          </div>


        </div>

      </div>
    </section> */}
    <section className="pt-2">
      <div className="container">
        <div className="row">

          <MovieList />



        </div>

      </div>
    </section>

  </>;
}
