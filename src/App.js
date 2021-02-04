import {Provider} from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
// import Color from "./components/color"
import HomePage from './components/HomePage';
import Favourites from "./components/Favourites";
import NavBar from "./components/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import store from "./store/store"
import './css/styles.css'
function App() {
  return (
    <Provider store={store}>
     
      <>
      
      <Router>
      < NavBar/>
     
     
      <Switch>
        <Route path="/" exact render={(props)=><HomePage {...props}/>}/>
        <Route path="/favourites" exact render={(props)=><Favourites {...props}/>} />

        </Switch>
      </Router>
      </>
      
    </Provider>
    
  );
}

export default App;
