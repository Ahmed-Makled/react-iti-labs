import React, { useState, useEffect } from 'react';
import axiosInstance from "./../../Network/axiosConfig";
import MyPagination from './Pagination/Pagination'
import MovieList from "./MovieList/MovieList";
import "./Movie.css"
export default function MovieApp() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(100);
  const [currentPage, setcurrentPage] = useState(1);



  const urlPage = `/movie/popular?api_key=53d39522fa2be9f28a94db487d6d3fd2&page=${currentPage}`

  const fecthMovies = async () => {
    const res = await axiosInstance.get(urlPage)
    await setMovies(res.data.results);
    await setLoading(false)
    await setPageCount(res.data.total_pages)

  }

  useEffect(() => {

    fecthMovies()
  }, []);
  const handlePageChange = (selectedObject) => {
    setcurrentPage(selectedObject.selected);
    fecthMovies();
  };
  return (

    <>
     

      <section className="pt-2 text-center">
        <div className="container">
          <div className="row ">
            <div className="col-6 m-auto">

              <MyPagination
                handlePageChange={handlePageChange}
                pageCount={pageCount}
              />
            </div>
          </div>

        </div>
      </section>

      <section className="pt-2">
        <div className="container">
          <div className="row">

            <MovieList movies={movies} loading={loading} />



          </div>

        </div>
      </section>

    </>
  );
}
