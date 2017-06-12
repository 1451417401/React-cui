import React from 'react';
import Carousel from '../../src/carousel/carousel';




class CarouselTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var images = [
            'images/c1.jpg',
            'images/c2.jpg',
            'images/c3.jpg',
            'images/c4.jpg',
            'images/c5.jpg',
        ]
        return <Carousel images={images}></Carousel>
    }
}

export default CarouselTab;
