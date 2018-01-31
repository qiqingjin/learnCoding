/*
* @Author: yuey9507
* @Date:   2018-01-25 14:28:48
* @Last Modified by:   yuey9507
* @Last Modified time: 2018-01-29 18:32:46
*/
import React from 'react';
import {Button, DatePicker, Input, TimePicker, LocaleProvider} from 'antd';
import ar_EG from 'antd/lib/locale-provider/ar_EG';
//import moment from 'moment';
//import 'moment/locale/ar';
//moment.locale('ar');

const App = () => (
  <LocaleProvider locale={ar_EG}>
  	<TimePicker />
  </LocaleProvider>
);

export default App;