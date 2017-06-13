import React from 'react';
import { render } from 'react-dom';

import Modal from '../../src/modal/modal';
import '../assets/css/modal-tab.scss';

class ModalTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeModal: false
        }
    }
    render() {
        var tip = "操作成功!操作成功!";
        return <div className="modal-test">
                        <a className="view-src" href="https://github.com/1451417401/React-cui/tree/master/src/modal">view src---modal</a>
            <a className="btn" onClick={this.submit.bind(this)}>open modal</a>
            <Modal tip={tip} active={this.state.activeModal}></Modal>
        </div>
    }
    submit() {
        this.setState({
            activeModal: true
        })
    }
}

export default ModalTab;
