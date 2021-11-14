import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
// Pages
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Login from "./components/login-page/Login";
import Register from "./components/login-page/Register";
import Reset from "./components/login-page/Reset";
import ResetCode from "./components/login-page/Reset-code";
import ResetForm from "./components/login-page/Reset-form";
import ResetDone from "./components/login-page/Reset-done";
import Profile from "./components/account/Profile";
import ProductDetail from "./pages/ProductDetails";
function App(props) {
  // Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logInHandler = () => {
    setIsLoggedIn(!isLoggedIn);
    console.log(isLoggedIn);
  };
  //loader
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <div className="loader">
      <FadeLoader size={30} color={"#123abc"} loading={loading} />
    </div>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={() => <HomePage />} />
        <Route
          exact
          path="/login"
          component={() => <Login logInHandler={logInHandler} />}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/reset-code" component={ResetCode} />
        <Route exact path="/reset-form" component={ResetForm} />
        <Route exact path="/reset-done" component={ResetDone} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/productdetails" component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
