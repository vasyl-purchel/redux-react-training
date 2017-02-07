import 'babel-polyfill';

import { render } from 'react-dom';
import { hashHistory } from 'react-router';

import '../styles/application.scss';
import store from './store';
import ReduxProvider from './components/ReduxProvider';

render(ReduxProvider(store, hashHistory), document.getElementById('app'));
