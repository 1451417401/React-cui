import React from 'react';
import { render } from 'react-dom';

import Datepicker from './datepicker';


var dateToShow = "2017-6-2";
render(<Datepicker date={dateToShow}/>, document.getElementById('app'));
