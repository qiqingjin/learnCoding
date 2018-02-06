/*
* @Author: yuey9507
* @Date:   2018-01-25 14:28:48
* @Last Modified by:   yuey9507
* @Last Modified time: 2018-02-06 15:16:10
*/
import React from 'react';
import {Button, DatePicker, Input, TimePicker, LocaleProvider} from 'antd';
import ar_EG from 'antd/lib/locale-provider/ar_EG';
import './main.scss';
//import moment from 'moment';
//import 'moment/locale/ar';
//moment.locale('ar');
//locale={ar_EG}
const App = () => (
  <LocaleProvider >
  	<div>
  	<TimePicker />
  	<div className="font-color">test font color</div>
  	</div>
  </LocaleProvider>
);

export default App;