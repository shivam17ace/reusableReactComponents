import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from './Form/form';
import RecipeReviewCard from './Cards/cards'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
  <Form />
  <RecipeReviewCard />
  </>
);
