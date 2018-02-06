/*
* @Author: yuey9507
* @Date:   2018-01-25 14:28:48
* @Last Modified by:   yuey9507
* @Last Modified time: 2018-02-05 17:57:53
*/
import React from 'react';
import {Button, DatePicker, Input, TimePicker, LocaleProvider} from 'antd';
import ar_EG from 'antd/lib/locale-provider/ar_EG';
//import moment from 'moment';
//import 'moment/locale/ar';
//moment.locale('ar');
//locale={ar_EG}
const App = () => (
  <LocaleProvider >
  	<TimePicker />
  </LocaleProvider>
);

export default App;