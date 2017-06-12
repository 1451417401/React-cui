import React from 'react';
import { render } from 'react-dom';
import Accordion from './accordion';


var accordionData = {
    '大标题1': ['标题1-0', '标题1-1', '标题1-2'],
    '大标题2': ['标题2-0', '标题2-1', '标题2-2'],
    '大标题3': ['标题3-0', '标题3-1', '标题3-2'],
    '大标题4': ['标题4-0', '标题4-1', '标题4-2'],
}


render(<Accordion  accordionData={accordionData}/>, document.getElementById('app'));
