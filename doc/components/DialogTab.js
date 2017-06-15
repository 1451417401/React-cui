import React from 'react';
import Dialog from '../../src/dialog/dialog';
import '../assets/css/dialog-tab.scss';

class DialogTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFlag: false,
            lists: [
                "list-1111111111111111111111",
                "list-222222222222222",
                "list-333333333333333",
                "list-444444444444444"
            ]
        }
    }
    componentWillReceiveProps() {
        //console.dir('tab---------will');
        //console.dir(this.state.showFlag);
        if (this.state.showFlag) {
            this.setState({
                showFlag: false
            })
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
        return <div className="dialog-test">
                <a className="view-src" href="https://github.com/1451417401/React-cui/tree/master/src/dialog">view src---dialog</a>
                <ul className="list">
                    {
                        this.state.lists.map((value,index)=>{
                            return <li key={index} style={liStyle}>{value}</li>
                        })
                    }
                </ul>
                <a className="del" onClick={this.openDialog.bind(this)} style={btnStyle}>delete</a>
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

export default DialogTab;
