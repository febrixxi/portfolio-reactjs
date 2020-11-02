import React, { useState } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import routes from './config/routes';
import { Footer } from './pages';
import ThemeContext from './context/ThemeContext';
import Layout from './pages/Layout';

function App() {
  const [theme, setTheme] = useState('light');
  const value = { theme, setTheme };

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={value}>
        <Layout>
          <Sidebar />
        </Layout>
      </ThemeContext.Provider>
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
