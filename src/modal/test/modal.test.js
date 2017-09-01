import React from 'react';
import { render } from 'react-dom';
//import ShallowRenderer from 'react-test-renderer/shallow'; 
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

import Modal from '../modal';

describe('Modal test',()=>{
    it('modal tip ',()=>{
        const result=shallow(<Modal tip={'Hello Wrold'} />);
        expect(result.find('p').text()).toEqual('Hello Wrold');
    })
})