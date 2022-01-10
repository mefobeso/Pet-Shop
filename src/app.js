import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import HomePage from "./components/home/HomePage";
import LandingPage from "./components/LandingPage";
import News from "./components/news/News";
// Login
import Login from "./components/login-page/Login";
import LoginAdmin from"./components/login-page/LoginAdmin"
import Register from "./components/login-page/Register";
import Reset from "./components/login-page/Reset";
import ResetCode from "./components/login-page/Reset-code";
import ResetForm from "./components/login-page/Reset-form";
import ResetDone from "./components/login-page/Reset-done";
import RegisterCode from "./components/login-page/Register-code";
import RegisterDone from "./components/login-page/Register-done";
// Profile
import Profile from "./components/profile/Profile";
import OrderDetails from "./components/profile/OrderTab/OrderDetails";
// Product
import Categories from "./components/category/Categories";
import ProductList from "./components/product/ProductList";
import ProductDetail from "./pages/ProductDetails";
import Cart from "./components/cart/Cart";
import Favorite from "./components/favorite/Favorite";
import Search from "./components/search/Search";
import CheckOutCart from "./components/cart/CheckOutCart";
import OrderedCart from "./components/cart/OrderedCart";
import NewsDetails from "./components/news/NewsDetails";
// Admin
// import AdminLayout from "./components/admin/layouts/Admin";
import AdminHome from "./pages/admin/index"
function App() {
  // Login State

  const onGGLogin = () => {
    localStorage.setItem("isLoggedIn", "1");
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={() => <HomePage />} />
        <Route exact path="/news/page=:page" component={News} />
        <Route path="/news/details/id=:id" exact>
          <NewsDetails />
        </Route>
        {/* Login */}
        <Route
          exact
          path="/login"
          component={() => <Login onGGLogin={onGGLogin} />}
        />
        <Route exact path="/adminLogin" component={LoginAdmin} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset" component={Reset} />
        <Route exact path="/reset-code" component={ResetCode} />
        <Route exact path="/reset-form" component={ResetForm} />
        <Route exact path="/reset-done" component={ResetDone} />
        <Route exact path="/register-code" component={RegisterCode} />
        <Route exact path="/register-done" component={RegisterDone} />
        {/* Profile */}
        <Route exact path="/profile" component={() => <Profile />} />
        <Route path="/profile/order/id=:orderid" exact>
          <OrderDetails></OrderDetails>
        </Route>
        {/* Product */}
        <Route exact path="/home/category" component={Categories} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route path="/home/product/page=:page" exact>
          <ProductList />
        </Route>
        <Route path="/home/search/keyword=:search" exact>
          <Search />
        </Route>
        <Route exact path="/home/cart" component={Cart} />
        <Route exact path="/home/favorite" component={Favorite} />
        <Route exact path="/home/cart/confirm" component={CheckOutCart} />
        <Route exact path="/home/cart/checkout" component={OrderedCart} />


          {/* ADMIN SITE */}
          <Route
                path={process.env.PUBLIC_URL + "/admin"}
                component={AdminHome}
          />
          
      </Switch>
    
    </Router>
  );
}

export default App;
