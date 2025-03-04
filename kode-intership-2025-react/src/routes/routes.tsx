import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from '../pages/Main/Main';
import { Profile } from '../pages/Profile/Profile';

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
      </Routes>
    </Router>
  );
};
