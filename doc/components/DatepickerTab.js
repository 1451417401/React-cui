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
                    
                    <Datepicker date={dateToShow}></Datepicker>
                </div>

    }
}

export default DatepickerTab;
