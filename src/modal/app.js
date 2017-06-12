import React from 'react';
import { render } from 'react-dom';

import Modal from './modal';

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeModal: false
        }
    }
    render() {
        var tip = "操作成功!操作成功!";
        return <div>
            <button onClick={this.submit.bind(this)}>open</button>
            <Modal tip={tip} active={this.state.activeModal}></Modal>
        </div>
    }
    submit() {
        this.setState({
            activeModal: true
        })
    }
}


render(<Test />, document.getElementById('app'));
