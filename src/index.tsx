import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/portfolio">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);