import React from 'react';

import './carousel.scss';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        var { images } = this.props;
        images = images.concat(images)
        return <div id="c-view">
                <ul id="c-content">
                    {
                        images.map((value,index)=>{
                            return <li key={index}><img src={value} alt={index}></img></li>
                        })
                    }
                </ul>
            </div>
    }
    componentDidMount() {
        var _this = this;
        var { images } = _this.props;
        var index = 1;
        var number = images.length + 1;
        var width = 480;

        _this.inter = setInterval(
            function() {
                if (index <= number) {
                    toLeft();
                }
            }, 2000);

        function toLeft() {
            var leftValue = ['-', index * width, 'px'].join('');
            document.getElementById('c-content').className = 'ani';
            document.getElementById('c-content').style.left = leftValue;

            index++
            if (index > number) {
                reset();
            }
        }

        function reset() {

            clearInterval(_this.inter);
            index = 1;
            document.getElementById('c-content').className = '';
            document.getElementById('c-content').style.left = '0px';
            _this.inter = setInterval(toLeft, 2000);
        }

    }
    componentWillUnmount() {
        clearInterval(this.inter);
    }
}

export default Carousel;
