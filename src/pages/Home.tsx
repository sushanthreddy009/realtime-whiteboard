import React from 'react';
import { initKeycloak } from '../services/authService';

const Home: React.FC = () => {
  initKeycloak(); // Initialize Keycloak when the home page is rendered

  return <div>Welcome to the Realtime Whiteboard. Please login to continue.</div>;
};

export default Home;
