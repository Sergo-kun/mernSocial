import React from 'react'
import "materialize-css"
import Navbar from "./components/Nav/Navbar";
import RegContainer from "./components/Auth/Registration/RegContainer";
import {Provider} from "react-redux";
import store from "./reducers/reducer";

function App() {


  return (
    <div className="App">
        <Provider store={store}>
        <Navbar/>
        <RegContainer/>
        </Provider>
    </div>
  );
  debugger
}

export default App;
