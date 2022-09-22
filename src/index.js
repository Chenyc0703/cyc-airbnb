import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import {ThemeProvider} from 'styled-components'
import App from './App';
import "normalize.css"
import "@/assets/css/index.less"
import theme from '@/assets/theme'
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);


