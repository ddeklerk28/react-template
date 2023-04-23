import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

const Users = lazy(() =>
  import('../pages/Users').then((module) => ({
    default: module.Users,
  })),
);

const User = lazy(() =>
  import('../pages/User').then((module) => ({
    default: module.User,
  })),
);

export const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" index element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </Suspense>
    </>
  );
};
