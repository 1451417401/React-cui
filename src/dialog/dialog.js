import React from 'react';
import classNames from 'classnames';
import './dialog.scss';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFlag: false
        }
    }
    render() {
        console.dir('-----render')
        return <div className={classNames({'dialog-container':true,'show':this.state.showFlag})} onClick={this.hide.bind(this)}>
                <div className="content" onClick={this.stopPop.bind(this)}>
                    <div>
                        <p className="msg">this is message!</p>
                    </div>
                    <div className="btn">
                        <a className="cancel" onClick={this.hide.bind(this)}>取消</a>
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
        console.dir(nextProps.showFlag);
        console.dir(this.props.showFlag);
        //if (!this.props.showFlag) {
        this.setState({ showFlag: nextProps.showFlag });
        //}
        console.dir(this.props.showFlag);

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
        //this.hide();
        console.dir('======sure');
        console.dir(this.props.showFlag);
    }
    show() {
        this.setState({
            showFlag: true
        })
    }
    hide() {
        this.setState({
            showFlag: false
        })

        console.dir('======hide');
        console.dir(this.props.showFlag);
    }
    stopPop(e) {
        e.stopPropagation();
    }
}

export default Dialog;
