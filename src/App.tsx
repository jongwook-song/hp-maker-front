import React from 'react';

import Modal from 'react-modal';

import AppRoute from './AppRoute';
import './App.css';



function App() {
  return (
    <div className="App">
      <AppRoute />
    </div>
  );
}

export default App;
Modal.setAppElement('#root')