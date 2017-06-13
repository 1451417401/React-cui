import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return <div>
                <h1>welcome!</h1>
                <ul className="link-list">
                  <li><Link to="/datepickerTab">Go datepicker</Link></li>
                    <li><Link to="/dialogTab">Go dialog</Link></li>
                    <li><Link to="/modalTab">Go modal</Link></li>
                    <li><Link to="/accordionTab">Go accordion</Link></li>
                    <li><Link to="/treeTab">Go tree</Link></li>
                </ul>
               </div>
    }
}

export default Home;
