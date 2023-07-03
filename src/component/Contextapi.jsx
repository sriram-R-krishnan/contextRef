import React,{createContext,useReducer,useState} from 'react'

export const MyContext = createContext()


const reducer = (state,action) =>{
     switch(action.type)
     {
          case 'selectUser' : 
          return { selectedUser : action.payload }
          default : 
              return {selectedUser : "All"}
          
     }
}

const Contextapi = ({children}) => {

   const [ apiData, setApiData ] = useState()
   const [selectedUser, setSelectedUser] = useState("All");

   const [state,dispatch] = useReducer(reducer , {selectedUser : "All"})
   

  return (
   <MyContext.Provider value={{apiData,setApiData,selectedUser, setSelectedUser ,state,dispatch}}>
        {children}
   </MyContext.Provider>
  )
}

export default Contextapi