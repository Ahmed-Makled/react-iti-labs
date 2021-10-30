import * as types from "../Types";
import axiosInstance from "./../../Network/axiosConfig";



export const getMovies = () => (dispatch) => {
    const urlPage = `/movie/popular?api_key=53d39522fa2be9f28a94db487d6d3fd2&page=${1}`

    return axiosInstance.get(urlPage).then((res) =>
        dispatch({
            type: types.GET_MOVIES,
            payload: res.data.results,
        })
    );
};



//   const fetchMovies = async () => {
//     const res = await axiosInstance.get()
//     await setMovies(res.data.results);
//     await setLoading(false)
//     await setPageCount(res.data.total_pages)

//   }
