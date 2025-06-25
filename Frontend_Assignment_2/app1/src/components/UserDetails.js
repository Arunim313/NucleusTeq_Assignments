import React from 'react';

function UserDetails({ name, email, location }) {
  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

export default UserDetails;
