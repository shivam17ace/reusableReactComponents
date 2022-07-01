import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from './Form/form';
import Card1 from './Cards/cards';
import MuiForm from './Form/muiform';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
  <Form />
  <Card1 />
  <MuiForm />
  </>
);
