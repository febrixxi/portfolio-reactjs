/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import routes from './config/routes';
// eslint-disable-next-line no-unused-vars
import ThemeProvider, { ThemeContext } from './themeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
