import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import DisplayContextProvider from './Store/DisplayContextProvider';
import CartContextProvider from './Store/CartContextProvider';
import {TokenContextProvider} from './Store/TokenContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <TokenContextProvider>
          <DisplayContextProvider>
            <CartContextProvider>         
                <App/>
            </CartContextProvider>
          </DisplayContextProvider>   
        </TokenContextProvider>

          </React.StrictMode>
          
);
reportWebVitals();
