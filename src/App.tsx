import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Router from '@/router';
import logo from './logo.png';
import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
};

export default App;
