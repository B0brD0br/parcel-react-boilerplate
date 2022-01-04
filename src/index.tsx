import { FC } from 'react';
import ReactDOM from 'react-dom';

import Main from './pages/Main/Main';

import 'normalize.css';
import 'sanitize.css';
import './scss/style.scss';

const App: FC = () => <Main />;

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
