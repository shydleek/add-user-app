import React, { useState } from 'react';

import AddUser from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHanlder = (userName, userAge) => {
    setUserList((prevUserList => {
      return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}];
    }))
  }

  return (
    <div>
      <AddUser onAddUser={addUserHanlder} />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
