import React from 'react';
import { render } from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow'; 

import Modal from '../modal';

// function shallowRender(Component) {
//   const renderer = TestUtils.createRenderer();
//   console.dir(renderer);
//   renderer.render(<Component/>);
//   return renderer.getRenderOutput();
// }

describe('Modal test',()=>{
    it('modal tip ',()=>{
       const renderer = new ShallowRenderer();
       renderer.render(<Modal />);
       console.dir(renderer);
       const result = renderer.getRenderOutput();
       console.dir(result.type);
       expect(result.type).toEqual('div');
    })
})