import React from 'react';
import classNames from 'classnames';
import './modal.scss';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            inter: null
        }
    }
    componentWillMount() {
        var { active } = this.props;
        this.setState({
            active: active
        })
    }
    render() {
        var { tip } = this.props;
        return <div className={classNames({'modal': true,'active': this.state.active})}>
                    <p>{tip}</p>
                </div>
    }
    componentWillReceiveProps(nextProps) {
        var { active } = nextProps;
        if (active) {
            this.setState({
                active: active
            })
        }
    }
    componentDidUpdate() {
        var { active } = this.props;
        var _this = this;
        clearTimeout(_this.state.inter);
        if (active) {
            _this.state.inter = setTimeout(() => {
                _this.setState({
                    active: false
                })
            }, 2000)
        }
        //调用页重复触发弹窗时，还是应该通过回调函数去控制调用者处的state
        //单向数据流往往会出现这种问题，因为数据的控制是单向的
        // let {modalCallback}=this.props;
        // setTimeout(modalCallback, 2000)
        }

    }


export default Modal;
