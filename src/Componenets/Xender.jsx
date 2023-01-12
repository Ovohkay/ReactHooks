import React, {useReducer} from 'react'
import styled,{css} from 'styled-components'
import { Xreducer } from './Xreducer'
    




const Xender = () => {

    const [state, dispatch] = useReducer(Xreducer,{
        count: 0,
        show: true,
        btn: false,
    })    
   return (
    <Container>
        <h2>xender</h2>
        <Up>
        <Boxes onClick={()=> {
            dispatch({ type: "SEND"})
        }}>
            images   {state.show ? <div>*</div> : null}
        </Boxes>
        <Boxes  onClick={()=> {
            dispatch({ type: "SEND" })
        }} >
            images {state.show? <div>*</div> : null}
        </Boxes>
        <Boxes  onClick={()=> {
            dispatch({ type: "SEND"})
        }} >
            images {state.show? <div>*</div> : null}
        </Boxes>
        <Boxes  onClick={()=> {
            dispatch({ type: "SEND"})
        }} >
            images {state.show? <div>*</div> : null}
        </Boxes >
        <Boxes  onClick={()=> {
            dispatch({ type: "SEND"})
        }} >
            images {state.show? <div>*</div> : null}
        </Boxes>
        <Boxes  onClick={()=> {
            dispatch({ type: "SEND"})
        }} >
            images {state.show? <div>*</div> : null}
        </Boxes>
        <Boxes  onClick={()=> {
            dispatch({ type: "SEND"})
        }} >
            images {state.show? <div>*</div> : null}
        </Boxes>
        <Boxes  onClick={()=> {
            dispatch({ type: "SEND"})
        }} >
            images {state.show? <div>*</div> : null}
        </Boxes>
        </Up>
        <br/>
        <br/>
        <br/>
        <br/>
        <Down>
        <button>send</button>
        <h1>{state.count}</h1>
        <button  onClick={()=> {
            dispatch({ type: "DELETE"})
        }}>delete</button>
        </Down>
        
</Container>
   )
  
}

export default Xender;

const Container = styled.div`

background-color: blue;
 align-items: center;
display: flex;
justify-content: center;
flex-direction: column;


`
const Up = styled.div`
display: flex;
align-items : cneter;
`
const Down = styled.div`
width :200px;
display : flex;
justify-content: space-between;
padding-top: 300px;

`



const Boxes = styled.div`
background-color: red;
height: 100px;
width: 100px;
margin-right: 20px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer

`



