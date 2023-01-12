import React from 'react'
import { useContext } from 'react'
import { UseContext } from './UseContext'
 const Home = () => {
    const {name} =useContext(UseContext)
  return (
    <div>
        <h1>welcome, {name.toUpperCase()}</h1>
    </div>
  )
}

export default Home;