import React from 'react';

function Home({ setIsLoggedIn }) {
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Welcome to D'Select Sarees</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {[
          { name: 'Khadi Purple', price: 1200, old: 1500, img: 'saree1.jpg' },
          { name: 'Khadi Blue', price: 1600, old: 2000, img: 'saree2.jpg' },
          { name: 'Khadi Maroon', price: 1800, old: 2300, img: 'saree3.jpg' },
          { name: 'Cotton Saree', price: 1400, old: 1700, img: 'saree4.jpg' },
        ].map(saree => (
          <div key={saree.name} style={{ border: '1px solid #ccc', padding: 10, borderRadius: 8 }}>
            <img src={`/${saree.img}`} alt={saree.name} width="150" /><br />
            {saree.name}<br />
            <b>₹{saree.price}</b> <del>₹{saree.old}</del>
          </div>
        ))}
      </div>
      <br /><button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
