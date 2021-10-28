// import module
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieApp from "./Components/Movie/Movie";
//import Component
import NavbarComponent from "./Shared/Navbar/Navbar";
import NotFound from "./Shared/NotFound/NotFound";
import HomeComponent from "./Views/Home/Home";



function App() {
  return (
    
    <Router>
    <NavbarComponent />
    <Switch>
      <Route path="/" exact component={HomeComponent} />
      <Route path="/movie" exact component={MovieApp} />
         <Route path="*" exact component={NotFound} />
    </Switch>
  </Router>  );
}

export default App;
