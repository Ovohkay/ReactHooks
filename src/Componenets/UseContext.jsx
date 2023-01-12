import React
 from 'react'
import { createContext,useState } from 'react'

export const UseContext = createContext(null);
 
;

export const MainContext = ({children}) => {
    const [name, setName]= useState("")
    const [email, setEmail] = useState("")
  return (
    <UseContext.Provider value={{
        name,
        email,
        setName,
        setEmail,
    }}>
        {children}
        
    </UseContext.Provider>
  )
}




