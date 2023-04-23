import React from 'react';
import { CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Navigation, IMenuItem } from './components/Navigation';
import { AppRoutes } from './components/Routes';

const App: React.FC = () => {
  const navigate = useNavigate();

  const items: IMenuItem[] = [
    { label: 'Users', onClick: () => navigate('/users') },
    { label: 'User', onClick: () => navigate('/user/1') },
  ];

  return (
    <>
      <CssBaseline />
      <Navigation items={items} />
      <AppRoutes />
    </>
  );
};

export default App;
