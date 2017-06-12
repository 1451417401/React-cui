import React from 'react';
import classNames from 'classnames';
import './datepicker.scss';
class Datepicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            date: new Date().getDate(),
            showFlag: false,
            dateString: ''
        }
    }
    componentWillMount() {
        //console.dir('willMount');
        var dateToShow = this.props.date;
        if (dateToShow) {
            this.setState({
                dateString: dateToShow
            })
        }
    }
    render() {
        var dataToShow = this.init();
        // for (var i = 0; i < dataToShow.length; i++) {
        //     var temp = dataToShow[i];
        //     for (var j = 0; j < temp.length; j++) {
        //         temp[j] = '<td>' + temp[j] + '</td>';
        //     }
        //     temp = '<tr>' + temp + '</tr>';
        // }
        //console.dir(dataToShow);
        return <div className="d-container">
                    <input type="text" className="p-input" onChange={this.handleChagne.bind(this)} onFocus={this.show.bind(this)} value={this.state.dateString} />
                    <div className={classNames({'p-content':true,'hide':!this.state.showFlag})}>
                        <div>
                            <span className="year-op" onClick={this.yearLeft.bind(this)}>&lt;&lt;</span>
                            <span className="month-op" onClick={this.monthLeft.bind(this)}>&lt;</span>
                            <span>{this.state.year}</span>年
                            <span>{this.state.month}</span>月
                            <span className="month-op" onClick={this.monthRight.bind(this)}>&gt;</span>
                            <span className="year-op" onClick={this.yearRight.bind(this)}>&gt;&gt;</span>
                        </div>
                        <div>
                            <table className="c-weeek">
                                <thead>
                                    <tr>
                                        <td>日</td>
                                        <td>一</td>
                                        <td>二</td>
                                        <td>三</td>
                                        <td>四</td>
                                        <td>五</td>
                                        <td>六</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataToShow.map((rows,key)=>{
                                            return  <tr key={key}>
                                                        {
                                                             rows.map((item,index)=>{
                                                                 return <td key={index} onClick={this.dateSelect.bind(this,item)} className={classNames({'current-day': item==this.state.date,'item-day': item!=''})}>{item}</td>
                                                             })
                                                        }
                                                    </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div> 
                </div>

    }
    init() {
        var dataToShow = [];

        var daysInMonth = new Date(this.state.year, this.state.month, 0).getDate(); //莫个月的天数
        var firstDayOfMonth = new Date(this.state.year, this.state.month - 1, 1).getDay(); //莫个月第一天是星期几

        var firstRow = [];
        for (var i = 0; i < firstDayOfMonth; i++) {
            firstRow[i] = "";
        }
        for (var i = firstDayOfMonth, j = 1; i < 7; i++) {
            firstRow[i] = j++;
        }
        //console.dir(firstRow);
        dataToShow.push(firstRow);

        var rows = Math.ceil((daysInMonth) / 7);
        for (var i = 0; i < rows; i++) {
            var temp = [];
            for (var j = 0; j < 7; j++) {
                var item = i * 7 + j + (7 - firstDayOfMonth) + 1;
                if (item <= daysInMonth) {
                    temp[j] = item;
                } else {
                    temp[j] = '';
                }

            }
            dataToShow.push(temp);
        }
        return dataToShow;
        // this.setState({
        //     dataToShow: dataToShow
        // })
    }
    handleChagne(event) {}
    show() {
        this.setState({
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            date: new Date().getDate(),
            showFlag: true
        });
        this.init(this.state.year, this.state.month, this.state.date);
    }
    hide(event) {
        console.dir(event.target);
        this.setState({
            showFlag: false
        })
    }
    yearLeft() {
        this.setState({
            year: this.state.year - 1,
        })
        this.init(this.state.year, this.state.month, this.state.date);
    }
    yearRight() {
        this.setState({
            year: this.state.year + 1,
        })
        this.init(this.state.year, this.state.month, this.state.date);
    }
    monthLeft() {
        this.setState({
            month: this.state.month - 1,
        })
        this.init(this.state.year, this.state.month, this.state.date);
    }
    monthRight() {
        this.setState({
            month: this.state.month + 1,
        })
        this.init(this.state.year, this.state.month, this.state.date);
    }
    dateSelect(date) {

        if (date) {
            this.setState({
                //date: date,
                showFlag: false,
                dateString: [this.state.year, this.state.month, date].join('-')
            })
        }
    }
}


export default Datepicker;
