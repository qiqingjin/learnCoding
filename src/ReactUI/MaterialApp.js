/*
* @Author: yuey9507
* @Date:   2018-01-22 19:32:40
* @Last Modified by:   yuey9507
* @Last Modified time: 2018-01-26 14:20:17
*/
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <div>
  	<MuiThemeProvider>
  		<RaisedButton label="Default" />
  	</MuiThemeProvider>
  </div>
);

export default App;