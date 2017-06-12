import React from 'react';
import './accordion.scss';
import classNames from 'classNames';

class Accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            index: 0
        }
    }

    render() {
        var { accordionData } = this.props;
        var keys = Object.keys(accordionData);
        return <div>

        {
             keys.map((value, index) => {
                return <div key={index} className="accordion-unit">
                    <p className="accordion-head"  onClick={this.toggle.bind(this,index)}>
                        <i className="icon"></i><span>{value}</span>
                    </p>
                    <ul className={classNames({'accordion-body': true,'active': this.state.active && index==this.state.index })}>
                        {
                            accordionData[value].map((item,index)=>{
                                return <li key={index} className="accordion-item">
                                <a href="javascript:;">{item}</a></li>
                            })
                        }
                    </ul>
                </div>
            })
        }
        </div>
    }
    toggle(index) {
        if (index == this.state.index) {
            this.setState({
                active: !this.state.active
            })
        } else {
            this.setState({
                index: index,
                active: true
            })
        }
    }
}

export default Accordion;
