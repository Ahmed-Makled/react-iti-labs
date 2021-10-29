import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import axiosInstance from '../../../Network/axiosConfig';
import "./MovieDetails.css"

export default function MovieDetails() {
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);

    const params = useParams();

    const url = `/movie/${params.id}?api_key=53d39522fa2be9f28a94db487d6d3fd2`
    const fecthMovies = async () => {
        try {
            const res = await axiosInstance.get(url)
            res.data &&
                console.log(res.data.genres)
            setMovie(res.data)
            setGenres(res.data.genres)


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        fecthMovies();


    }, []);

    // const genres =   movie.genres.map(element=>element)

    return (
        <>
            <div class="pt-5" >


                <div class="container" >

                    <div class="row" >
                        <div class="col-12 m-auto" >

                            <div class="movie_card" >
                                <div class="info_section">
                                    <div class="movie_header">
                                        <img class="locandina" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                                        />
                                        <h5>{movie.title}</h5>
                                        <h6>{movie.release_date}</h6>
                                        <span class="minutes">{movie.runtime} min</span>
                                        {genres.map((ele) => 
                                            <p class="type">{ele.name}</p>
                                         
                                        )}
                                    </div>
                                    <div class="movie_desc">
                                        <p class="text">
                                            {movie.overview}
                                        </p>
                                    </div>
                                </div>
                                <div class="blur_back bright_back" style={{
                                    backgroundImage: `url( https://image.tmdb.org/t/p/w500/${movie.backdrop_path} )`,

                                }}></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}


