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
                            return <li key={index}><img src={value}></img></li>
                        })
                    }
                </ul>
            </div>
    }
    componentDidMount() {
        var { images } = this.props;
        var index = 1;
        var number = images.length + 1;
        var width = 480;

        var inter = setInterval(
            function() {
                if (index <= number) {
                    toLeft();
                }
            }, 2000);

        function toLeft() {
            var leftValue = ['-', index * width, 'px'].join('');
            //$('.c-content').addClass('ani');
            // $('.c-content').css({
            //     "left": leftValue
            // });
            document.getElementById('c-content').className = 'ani';
            document.getElementById('c-content').style.left = leftValue;

            index++
            console.dir(index);
            if (index > number) {
                reset();
            }
        }

        function reset() {
            clearInterval(inter);
            index = 1;
            // $('.c-content').removeClass('ani');
            // $('.c-content').css({
            //     "left": "0px"
            // })
            document.getElementById('c-content').className = '';
            document.getElementById('c-content').style.left = '0px';
            inter = setInterval(toLeft, 2000);
        }

    }
}

export default Carousel;
