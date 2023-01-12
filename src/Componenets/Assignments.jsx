// import React, {useRef} from 'react'
// import Child from './Child'

// const Assignments = () => {

//     // const newRef = useRef()
//     const newRef = useRef()
//   return (
//     <div>
//         <div><Child ref={newRef}/> </div>
//     {/* <button onClick={() => newRef.current.increment ()}>
//         parent button
//     </button> */}
//     <button onClick={()=>{newRef.current.increment()}}>
//         parent button
//     </button>
//     </div>
//   )
// }

// export default Assignments;

import React ,{useRef}from 'react'
import Child from "./Child"

 const Assignments = () => {

    const myRef = useRef()

  return (
    <div>
        <div><Child ref={myRef}/></div>
    <button onClick={()=>{myRef.current.increment()}}>parent button</button>
    </div>

  )
}

export default Assignments

