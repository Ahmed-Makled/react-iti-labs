import React, { useState, useEffect } from 'react';
import { Link , useHistory} from "react-router-dom";
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" >MovieApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link to="/" className="nav-link  "  >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/movie" className="nav-link "  >Movie</Link>
              </li>
            </ul>
            <form className="d-flex"
                onSubmit={handleSubmit}

            >
              <input className="form-control me-2"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
              type="search"
               placeholder="Search"
               aria-label="Search" />
              <button  className="btn btn-outline-light" type="submit">Search</button>
            </form>

          </div>
        </div>
      </nav>
    </>
  )
}
