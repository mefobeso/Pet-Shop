import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import {useState,useEffect} from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
// Pages
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Login from "./components/login-page/Login";
import Register from "./components/login-page/Register";
import Reset from "./components/login-page/Reset";
import Profile from "./components/account/Profile";
function App(){
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false)
        },500)
    },[])
    return(
        loading ?
        <div className="loader">
            <FadeLoader
        size={30}
        color={"#123abc"}
        loading={loading}
        />
        </div>
        
        :     
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/home" component={HomePage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/forgot-password" component={Reset}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        </Router>
    );
}

export default App;