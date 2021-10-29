import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import axiosInstance from '../../../Network/axiosConfig';
import MovieList from '../MovieList/MovieList';

export default function MovieSearch() {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams();

    const url = `/search/movie?api_key=53d39522fa2be9f28a94db487d6d3fd2&query=${params.key}`
    const fecthMovies = async () => {
        try {
            const res = await axiosInstance.get(url)
            res.data &&
                console.log(res.data.results)
            setMovie(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fecthMovies();
    }, [params]);
    return (
        <>
            <section className="pt-2">
                <div className="container">
                    <div className="row">

                        <MovieList movies={movie} loading={loading} />



                    </div>

                </div>
            </section>

        </>
    )
}
