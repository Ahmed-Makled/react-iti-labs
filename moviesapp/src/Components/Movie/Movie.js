import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyPagination from './Pagination/Pagination'
import MovieList from "./MovieList/MovieList";
import "./Movie.css"
import { getMovies } from '../../Store/Actions/Movies';
export default function MovieApp() {
  const movies = useSelector(state => state.movies.movies)
  const dispatch = useDispatch();

  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [pageCount, setPageCount] = useState(100);
  // const [currentPage, setCurrentPage] = useState(1);



  // const urlPage = `/movie/popular?api_key=53d39522fa2be9f28a94db487d6d3fd2&page=${currentPage}`

  // const fetchMovies = async () => {
  //   const res = await axiosInstance.get(urlPage)
  //   await setMovies(res.data.results);
  //   await setLoading(false)
  //   await setPageCount(res.data.total_pages)

  // }

  useEffect(() => {

    dispatch(getMovies());
    // fetchMovies()
  }, []);
  const handlePageChange = (selectedObject) => {

    // setCurrentPage(selectedObject.selected);
    dispatch(getMovies());
  };
  return (

    <>

      <section className="pt-2 text-center">
        <div className="container">
          <div className="row ">
            <div className="col-12 ">

              <MyPagination
                handlePageChange={handlePageChange}
                pageCount={1}
              />
            </div>
          </div>

        </div>
      </section>

      <section className="pt-2">
        <div className="container">
          <div className="row">

            <MovieList movies={movies} loading={false} />



          </div>

        </div>
      </section>



    </>
  );
}
