import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // Simulate data fetching
      setData({ name: 'React User' });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <h1>Welcome, {data.name}!</h1>}
    </div>
  );
};

export default HomePage;
