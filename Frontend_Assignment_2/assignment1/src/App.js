import React from 'react';
import UserCard from './components/UserCard';

function App() {
  const user = {
    name: "Arunim Malviya",
    email: "arunim.malviya.13@gmail.com",
    location: "Indore, India"
  };

  return (
    <div>
      <h1>User Profile Card</h1>
      <UserCard userData={user} />
    </div>
  );
}

export default App;
