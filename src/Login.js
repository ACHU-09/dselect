import React, { useState } from 'react';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginOrRegister = async () => {
    const res = await fetch('http://localhost:5000/users');
    const users = await res.json();
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
      if (existingUser.password === password) {
        localStorage.setItem('loggedInUser', username);
        setIsLoggedIn(true);
      } else {
        alert('Incorrect password');
      }
    } else {
      await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      localStorage.setItem('loggedInUser', username);
      setIsLoggedIn(true);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login / Register</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLoginOrRegister}>Submit</button>
    </div>
  );
}

export default Login;
