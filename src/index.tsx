import { FC } from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'sanitize.css';
import './scss/style.scss';

const App: FC = () => (
  <div>
    Build website using Parcel V2 & React
  </div>
);

const app = document.getElementById('app');
ReactDOM.render((
  <App />
), app);
