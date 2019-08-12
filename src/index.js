import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@/pages/layout';

import appStore from '@/redux/reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import '@/styles/index.css'

import '@/mock/index'

const store = createStore(appStore, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<Layout />
	</Provider>,
	document.getElementById('root')
);
