import React, { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => setUser(data.results[0]))
      .catch(err => console.error('Error fetching user:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {user ? <ProfileCard user={user} /> : <p className="text-gray-700">Loading...</p>}
    </div>
  );
}

export default App;
