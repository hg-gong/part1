import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import Ctree from './component/Ctree';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Ctree /> */}
  </React.StrictMode>
);

