import {Provider} from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css';
// import Color from "./components/color"
import HomePage from './components/HomePage';
import store from "./store/store"
import './css/styles.css'
function App() {
  return (
    <Provider store={store}>
     
      <>
      <HomePage/>
      </>
      
    </Provider>
  );
}

export default App;
