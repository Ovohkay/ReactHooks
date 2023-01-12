import React from 'react';
import  Login  from './Componenets/Login';
import  Home  from './Componenets/Home';
import Xender from './Componenets/Xender';
import  Assignments from './Componenets/Assignments';

// import Reducer from './Componenets/Reducer';
import {useRoutes} from "react-router-dom"

const App = () => {
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Login/>
  //   },
  //   {
  //     path: "/home",
  //     element: <Home/>
  //   }
  // ])
  // return <Xender/>
    // <Reducer/>

    return < Assignments/>
  
}

export  default App