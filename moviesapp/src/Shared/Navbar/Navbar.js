import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { changeLanguage } from '../../Store/Actions/Language';

import "./Navbar.css"
export default function NavbarComponent() {
  const language = useSelector(state => state.language.lang);
  const dispatch = useDispatch()

  const _movies = useSelector((state) => state.wishlist.movies);
  const [value, setValue] = useState("");
  const history = useHistory();
  useEffect(() => {
    // console.log(_movies)

  }, [_movies]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    history.push(`/movie/search/${value}`)

  };
  const changeLang = () => {
    dispatch(changeLanguage(language === 'en' ? 'ar' : 'en'))
  }



  return (
    <>
      <header class="section-header">

        <section class="header-main ">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-3 col-sm-4 col-md-4 col-5">
                <Link to="/movie" >

                  <span class="logo">MoviesApp</span> </Link> </div>
              <div class="col-lg-6 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
                <form onSubmit={handleSubmit} class="search-wrap">
                  <div class="input-group w-100"> <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text" class="form-control search-form rounded-0" placeholder="Search" />
                    <div class="input-group-append"> <button class="btn btn-primary search-button rounded-0" type="submit"> <i class="fa fa-search"></i> </button> </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-3 col-xl-4 col-sm-8 col-md-4 col-7">
                <div class="d-flex justify-content-end">
                  <Link to="/wishlist" class="d-flex align-items-center">
                    <i class="fas fa fa-heart text-white fs-5"></i>
                    <span className="badge bg-danger ms-1">{_movies.length}</span>
                  </Link>
                  <span onClick={changeLang} className=" ps-1 lang">{language}</span>

                </div>
              </div>
            </div>
          </div>
        </section>

      </header>

    </>
  )
}
