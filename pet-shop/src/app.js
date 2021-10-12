import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import {useState,useEffect} from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
// Pages
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Policies from "./components/policies/Policies";
function App(){
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false)
        },1000)
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
                <Route exact path="/catalog" component={Policies}/>
            </Switch>
        </Router>
    );
}

export default App;