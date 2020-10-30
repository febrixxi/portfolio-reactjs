import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import routes from './config/routes';
import { Footer } from './pages';

function App() {
  return (
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
      <Footer />
    </BrowserRouter>
  );
}
export default App;
