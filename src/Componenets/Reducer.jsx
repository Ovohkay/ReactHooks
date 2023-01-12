import React, { useReducer, useState } from "react"
import { reducerState } from "./reducerState"


const Reducer = () => {
  const [state, dispatch] = useReducer(reducerState,{
    count: 0,
    btn: false,
    show: true
  })


  return (
    <center>
      <h2>UseReducer Hook</h2>
      <br/>
      <h1>{state.count}</h1>
      {state.count === 20 ? null : 
          <button onClick={() => {
              dispatch({type:"INCREMENT"})
            }} >Add Count
          </button> 
      }
         {state.count === 0 ? null : 
          <button  onClick={() => {
            dispatch({type: "DECREMENT"})
          }} >Decrement Count</button>}
      <br/>
      <br/>
      <br/>
      <br/>
      {state.show ? <div>show</div> : null}
    </center>
  )
}

export default Reducer