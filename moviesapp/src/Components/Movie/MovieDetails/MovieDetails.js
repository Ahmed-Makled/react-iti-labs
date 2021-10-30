import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import axiosInstance from "../../../Network/axiosConfig";
import { updateWishlist } from "../../../Store/Actions/Wishlist";
import "./MovieDetails.css";

export default function MovieDetails() {
    const dispatch = useDispatch()

    const addToWishlist = () => {
        console.log(movie)
        dispatch(updateWishlist(movie))
    }
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const [productionCompanies, setProductionCompanies] = useState([]);
    const [totalRevenue, setTotalRevenue] = useState([]);

    const params = useParams();

    const url = `/movie/${params.id}?api_key=53d39522fa2be9f28a94db487d6d3fd2`;
    const fetchMovies = async () => {
        try {
            const res = await axiosInstance.get(url);
            let data = res.data

            data &&
                setMovie(data);
            setTotalRevenue(data.revenue)
            setProductionCompanies(nestedDataToString(data.production_companies))
            setGenres(nestedDataToString(data.genres))

            console.log(data)



        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchMovies();
    }, []);

    function nestedDataToString(nestedData) {
        let nestedArray = [],
            resultString;
        if (nestedData !== undefined) {
            nestedData.forEach(function (item) {
                nestedArray.push(item.name);
            });
        }
        resultString = nestedArray.join(', '); // array to string
        return resultString;
    };

    return (
        <>


            <section class="py-5">
                <div class="container">
                    <div class="row">

                        <div class="col">
                            <div class="movie-card movie-card--vertical">
                                <div class="movie-card_img">
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
                                </div>
                                <div class="movie-card_content">
                                    <div class="movie-card_title-section">
                                        <span class="movie-card_title">{movie.title}</span>
                                        <span class="meta-data">{movie.tagline}</span>
                                        <small>{movie.overview}</small>
                                    </div>
                                    <div class="card__footer">
                                        <div className="additional-details py-3">
                                            <span className="meta-data">{genres}</span>
                                            <span className="production-list">{productionCompanies}</span>
                                            <div className="row ">
                                                <div className="col-6 "> Original Release: <span className="meta-data py-2">{movie.release_date}</span></div>
                                                <div className="col-6 "> Running Time: <span className="meta-data py-2">{movie.runtime} mins</span> </div>
                                                <div className="col-6 "> Box Office: <span className="meta-data py-2">${totalRevenue}</span></div>
                                                <div className="col-6 "> Vote Average: <span className="meta-data py-2">{movie.vote_average}</span></div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div >
                                            <span onClick={() => addToWishlist(movie)} className='btn btn-primary btn-sm rounded-0'>Add To Wishlist</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
