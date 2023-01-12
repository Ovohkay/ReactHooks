import React from 'react'

export const Xreducer = (state,action) => {
    switch (action.type){
        case "SEND":
        return {
            count: state.count + 1,
            show: !state.count
        }
        
         case 'DELETE':
            return {
                count: state.count -1
            }
            
    }

 
   
  
}
