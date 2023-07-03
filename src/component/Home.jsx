import React, { useContext, useState } from 'react';
import { MyContext } from './Contextapi';
import ApiCall from './ApiCall';
import { Link } from 'react-router-dom';

const Home = () => {
  const { apiData,selectedUser, setSelectedUser,state,dispatch } = useContext(MyContext);
  const userNames = apiData && apiData.length > 0 ? apiData.map((user) => user.userId) : [];
  const uniqueNames = [...new Set(userNames)];

  const [user,setUser] = useState()
  
  

  const changeHandler = (e) => {

    dispatch({type : 'selectUser' , payload : e.target.value })
   
  };

  const filteredData = state.selectedUser === "All" ? apiData : apiData.filter((li) => li.userId === parseInt(state.selectedUser));

  return (
    <div>
      <ApiCall />
      <select id="userName" value={state.selectedUser} onChange={changeHandler}>
        <option value="All">All</option>
        {uniqueNames.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>
      {filteredData && filteredData.length > 0 ? (
        filteredData.map((li) => (
          <div key={li.id}>
            <p>{li.title}</p>
            <p>{li.userId}</p>
            <Link to={"/new"}>Route New</Link>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Home;
