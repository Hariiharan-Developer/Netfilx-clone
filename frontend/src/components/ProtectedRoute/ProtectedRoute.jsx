import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); // redirect if no token
        return;
      }

      try {
        const res = await fetch('https://netfilx-clone-backend-7hb5.onrender.com', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error('Failed to fetch profile');

        const data = await res.json();
        setUser(data.data); // data from backend
      } catch (error) {
        console.error(error);
        navigate('/login'); // redirect on error
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile">
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>User ID: {user.id}</p>
    </div>
  );
};

export default Profile;
