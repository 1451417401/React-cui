import React from 'react';
import Carousel from '../../src/carousel/carousel';




class CarouselTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var images = [
            'assets/images/c1.jpg',
            'assets/images/c2.jpg',
            'assets/images/c3.jpg',
            'assets/images/c4.jpg',
            'assets/images/c5.jpg',
        ]
        return <div>
                    <a className="view-src" href="https://github.com/1451417401/React-cui/tree/master/src/carousel">view src---datepicker</a>
                    <Carousel images={images}></Carousel>
                </div>

    }
}

export default CarouselTab;
