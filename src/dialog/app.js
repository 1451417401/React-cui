import React from 'react';
import { render } from 'react-dom';

import Dialog from './dialog';


class DialogApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFlag: false,
            lists: [
                "list-11111111111111",
                "list-222222222222222",
                "list-333333333333333",
                "list-444444444444444"
            ]
        }
    }
    render() {

        var liStyle = {
            listStyle: 'none'
        }
        var btnStyle = {
            cursor: 'pointer',
            marginLeft: '40px'
        }
        return <div>
                <ul>
                    {
                        this.state.lists.map((value,index)=>{
                            return <li key={index} style={liStyle}>{value}</li>
                        })
                    }
                </ul>
                <button onClick={this.openDialog.bind(this)} style={btnStyle}>删除</button>
                <Dialog showFlag={this.state.showFlag} successCallback={this.delSuccess.bind(this)}></Dialog>
        </div>
    }
    openDialog() {
        this.setState({
            showFlag: true
        })
    }
    delSuccess() {
        this.state.lists.pop();
        this.setState({
            showFlag: false,
            lists: this.state.lists
        })
    }
}

render(<DialogApp />, document.getElementById('app'));
