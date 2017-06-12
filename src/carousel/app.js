import React from 'react';
import { render } from 'react-dom';
import Carousel from './carousel';

var images = [
    'images/c1.jpg',
    'images/c2.jpg',
    'images/c3.jpg',
    'images/c4.jpg',
    'images/c5.jpg',
]
render(<Carousel images={images}  />, document.getElementById('app'));
