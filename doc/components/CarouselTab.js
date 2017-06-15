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
        return <div>
                    <a className="view-src" href="https://github.com/1451417401/React-cui/tree/master/src/carousel">view src---carousel</a>
                    <Carousel images={images}></Carousel>
                </div>

    }
}

export default CarouselTab;
