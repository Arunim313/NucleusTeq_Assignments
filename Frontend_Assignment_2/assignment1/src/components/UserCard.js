import React from 'react';
import UserDetails from './UserDetails';

function UserCard({ userData }) {
  return (
    <div style={{ border: "1px solid black", padding: "16px", width: "300px" }}>
      <h2>UserCard Component</h2>
      <UserDetails name={userData.name} email={userData.email} location={userData.location} />
    </div>
  );
}

export default UserCard;
