import React from 'react';
import Menu from './components/Menu';
import { MenuItems } from './data/MenuItems';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
      <Menu />
      <Routes>
      {MenuItems.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
             exact element={item.component}
          />
        );
      })}
      </Routes>
    </Router>
     
    </>
  );
}
