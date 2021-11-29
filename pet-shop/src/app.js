import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

// user data
import userData from "./database/user.data";
// Pages
import HomePage from "./components/home/HomePage";
import LandingPage from "./components/LandingPage";
// Login
import Login from "./components/login-page/Login";
import Register from "./components/login-page/Register";
import Reset from "./components/login-page/Reset";
import ResetCode from "./components/login-page/Reset-code";
import ResetForm from "./components/login-page/Reset-form";
import ResetDone from "./components/login-page/Reset-done";
import RegisterCode from "./components/login-page/Register-code";
import RegisterDone from "./components/login-page/Register-done";
// Profile
import Profile from "./components/profile/Profile";
import ProductDetail from "./pages/ProductDetails";
// Product
import Categories from "./components/category/Categories";
import ProductList from "./components/product/ProductList";
import Cart from "./components/cart/Cart";
import Favorite from "./components/favorite/Favorite";
function App(props) {
  // Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginInfor = localStorage.getItem("isLoggedIn");
    if (loginInfor === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (username, password) => {
    userData.map((user, index) => {
      console.log(password);
      if (
        user.username === username.trim() &&
        user.password === password.trim()
      ) {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
        return;
      }
    });
  };
  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };
  //loader
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? (
    <div className="loader">
      <FadeLoader size={30} color={"#123abc"} loading={loading} />
    </div>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/home"
          component={() => <HomePage isLoggedIn={isLoggedIn} />}
        />

        {/* Login */}
        <Route
          exact
          path="/login"
          component={() => <Login onLogin={loginHandler} />}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/reset-code" component={ResetCode} />
        <Route exact path="/reset-form" component={ResetForm} />
        <Route exact path="/reset-done" component={ResetDone} />
        <Route exact path="/register-code" component={RegisterCode} />
        <Route exact path="/register-done" component={RegisterDone} />
        {/* Profile */}
        <Route
          exact
          path="/profile"
          component={() => <Profile onLogout={logoutHandler} />}
        />
        {/* Product */}
        <Route exact path="/home/category" component={Categories} />
        <Route exact path="/home/product" component={ProductList} />
        <Route exact path="/productdetails" component={ProductDetail} />
        <Route exact path="/home/cart" component={Cart} />
        <Route exact path="/home/favorite" component={Favorite} />
      </Switch>
    </Router>
  );
}

export default App;
