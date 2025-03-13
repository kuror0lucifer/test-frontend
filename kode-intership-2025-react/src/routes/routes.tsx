import { FC } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, NotFound, Profile } from '../pages';

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/user/:userId'
          element={<Profile />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
};
