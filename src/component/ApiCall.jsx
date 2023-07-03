import React, { useContext, useEffect } from 'react'
import { MyContext } from './Contextapi';

const ApiCall = () => {

    const { setApiData } = useContext( MyContext )

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => { setApiData(data)})
    },[])

   
  return (
    <div>ApiCall</div>
  )
}

export default ApiCall