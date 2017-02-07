import { applyMiddleware } from 'redux';

import helloMiddleware from './hello';

export default applyMiddleware(helloMiddleware);
