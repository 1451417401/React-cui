import React from 'react';
import classNames from 'classnames';
import './dialog.scss';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        console.dir('-----render')
        return <div className={classNames({'dialog-container':true,'show':this.props.showFlag})} onClick={this.cancel.bind(this)}>
                <div className="content" onClick={this.stopPop.bind(this)}>
                    <div>
                        <p className="msg">确定?</p>
                    </div>
                    <div className="btn">
                        <a className="cancel" onClick={this.cancel.bind(this)}>取消</a>
                        <a className="sure" onClick={this.sure.bind(this)}>确定</a>
                    </div>
                </div>
            </div>

    }
    componentDidMount() {
        console.dir('-------didmount')
    }
    componentWillReceiveProps(nextProps) {
        console.dir('-----will')
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.dir('------should');
        console.dir(nextProps);
        console.dir(nextState);
        return true;
    }

    sure() {
        var { successCallback } = this.props;
        if (successCallback) {
            successCallback();
        }
    }
    cancel() {
        var { cancelCallback } = this.props;
        if (cancelCallback) {
            cancelCallback();
        }
    }
    stopPop(e) {
        e.stopPropagation();
    }
}

export default Dialog;
