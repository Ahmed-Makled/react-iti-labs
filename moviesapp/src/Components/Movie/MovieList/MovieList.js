import React, { useState, useEffect } from 'react';
import axiosInstance from "../../../Network/axiosConfig";
import MovieItem from "../MovieItem/MovieItem";
import MyPagination from '../Pagination/Pagination';
import Pagination from 'react-bootstrap/Pagination'
export default function MovieList() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPrevPage] = useState(1);
  const fecthMovies = async (currentPage) => {
    setLoading(true)
    const res = await axiosInstance.get(`/popular?api_key=53d39522fa2be9f28a94db487d6d3fd2&page=${currentPage}`)
    console.log(res.data.results);
    await setMovies(res.data.results);

    setLoading(false)

  }
  useEffect(() => {


    fecthMovies()


  }, []);

  // Get current posts
  const indexOfLastMovie = currentPage * moviesPrevPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPrevPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  return (

    <>

      <section className="pt-2 text-center">
        <div className="container">
          <div className="row ">
            <div className="col-12">

              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>

              {/* 
              <MyPagination
                moviesPrevPage={moviesPrevPage}
                totalMovies={movies.length}
                paginate={paginate}
              /> */}


            </div>


          </div>

        </div>
      </section>


      <MovieItem movies={movies} loading={loading} />
    </>
  );
}
