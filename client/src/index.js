import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TaskWindowProvider } from './components/TaskWindow/TaskWindowContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskWindowProvider>
      <App />
    </TaskWindowProvider>
  </React.StrictMode>
);

reportWebVitals();
