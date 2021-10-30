// import module
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieApp from "./Components/Movie/Movie";
//import Component
import NavbarComponent from "./Shared/Navbar/Navbar";
import { LanguageProvider } from "./Shared/Context/LanguageContext";
import MovieDetails from "./Components/Movie/MovieDetails/MovieDetails";
import NotFound from "./Shared/NotFound/NotFound";
import HomeComponent from "./Views/Home/Home";
import MovieSearch from "./Components/Movie/MovieSearch/MovieSearch";
import Wishlist from "./Components/Movie/Wishlist/Wishlist";
import { useSelector } from "react-redux";
import { useState } from "react";



function App() {
  const language = useSelector((state) => state.language.lang);
  const [lang, setLang] = useState('en')
  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className={language === "ar" ? "text-right" : "text-left"}
    >
      <LanguageProvider value={{ lang, setLang }}>
        <Router>
          <NavbarComponent />
          <Switch>
            <Route path="/" exact component={HomeComponent} />
            <Route path="/movie" exact component={MovieApp} />
            <Route path="/movie/:id" exact component={MovieDetails} />
            <Route path="/movie/search/:key" exact component={MovieSearch} />
            <Route path="/wishlist" exact component={Wishlist} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </Router>

      </LanguageProvider>
    </div>

  );
}

export default App;
