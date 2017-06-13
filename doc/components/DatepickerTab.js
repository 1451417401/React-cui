import React from 'react';
import Datepicker from '../../src/datepicker/datepicker';

class DatepickerTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var dateToShow = "2017-6-10";
        return <div>
                    <a className="view-src" href="https://github.com/1451417401/React-cui/tree/master/src/datepicker">view src---datepicker</a>
                    <Datepicker date={dateToShow}></Datepicker>
                </div>

    }
}

export default DatepickerTab;
