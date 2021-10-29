import React, { useState } from 'react';
import {
  
  Link, useHistory
} from "react-router-dom";
import "./Navbar.css"
export default function NavbarComponent() {
  const [value, setValue] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    history.push(`/movie/search/${value}`)

  };



  return (
    <>
    <header class="section-header">

      <section class="header-main border-bottom">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-3 col-sm-4 col-md-4 col-5">
               <Link href="#" class="brand-wrap" data-abc="true">

              <span class="logo">MoviesApp</span> </Link> </div>
            <div class="col-lg-6 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
              <form   onSubmit={handleSubmit} class="search-wrap">
                <div class="input-group w-100"> <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text" class="form-control search-form"  placeholder="Search" />
                  <div class="input-group-append"> <button class="btn btn-primary search-button" type="submit"> <i class="fa fa-search"></i> </button> </div>
                </div>
              </form>
            </div>
            <div class="col-lg-3 col-xl-4 col-sm-8 col-md-4 col-7">
              <div class="d-flex justify-content-end">
                
                <div class="dropdown btn-group">
                  
                   <Link class="nav-link nav-icons" to="/wishlist"> <i class="fas fa fa-heart text-white"></i></Link>
                  
                </div> <span class="vl"></span> <Link class="nav-link nav-user-img" ><span class="login">LOGIN</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav class="navbar navbar-expand-md navbar-main border-bottom text-center">
        <div class="container-fluid">
          <form class="d-md-none my-2">
            <div class="input-group"> <input type="search" name="search" class="form-control" placeholder="Search" required="" />
              <div class="input-group-append"> <button type="submit" class="btn btn-secondary"> <i class="fa fa-search"></i> </button> </div>
            </div>
          </form> <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#dropdown6" aria-expanded="false"> <span class="navbar-toggler-icon"></span> </button>
          <div class="navbar-collapse collapse" id="dropdown6" >
            <ul class="navbar-nav m-auto">
            
              <li class="nav-item"> <Link class="nav-link" to="/">Home</Link> </li>
              <li class="nav-item"> <Link class="nav-link"to="/movie">Movies</Link> </li>
              <li class="nav-item"> <Link class="nav-link" to="/">Contact Us</Link> </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    </>
  )
}
