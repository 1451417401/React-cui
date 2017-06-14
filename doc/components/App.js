import React from 'react';
import { Link } from 'react-router';
//import Accordion from '../../src/accordion/accordion';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var accordionData = {
            '大标题1': ['标题1-0', '标题1-1', '标题1-2'],
            '大标题2': ['标题2-0', '标题2-1', '标题2-2'],
            '大标题3': ['标题3-0', '标题3-1', '标题3-2'],
            '大标题4': ['标题4-0', '标题4-1', '标题4-2'],
        }
        return <div className="app">
            {/*<div><Accordion  accordionData={accordionData}></Accordion></div>*/}
            <div className="nav-tab">
                <div className="tab-head"><Link to="/"><h2>react ui components<span className="view-wap">...</span></h2></Link></div>
                <ul>
                  <li><Link to="/datepickerTab">datepicker</Link></li>
                    <li><Link to="/dialogTab">dialog</Link></li>
                    <li><Link to="/modalTab">modal</Link></li>
                    <li><Link to="/accordionTab">accordion</Link></li>
                    <li><Link to="/treeTab">tree</Link></li>
                </ul>
            </div>
            <div className="nav-content">
                <div className="content-box">
                {this.props.children}
                </div>
            </div>
        </div>
    }
}

export default App;
