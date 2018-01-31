/*
* @Author: yuey9507
* @Date:   2018-01-30 17:04:06
* @Last Modified by:   yuey9507
* @Last Modified time: 2018-01-30 18:00:40
*/
import React from 'react';
import { Page, Toolbar, Button } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

const App = () => (
	<Page>
		<Toolbar onClick={handleClick}><div className='center'>List</div></Toolbar>
	</Page>
);
const handleClick = () => {
	window.alert('ok');
}

export default App;