import React, { Component } from 'react';

class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: [],
      month: [],
      day: []
    };
  }

  componentDidMount() {
    var varYear = [];
    var varDay = [];

    //creates list with years
    for (let i = 1900; i <= 2019; i++) {
        let x = 1;
        varYear.push({id: x, name: i.toString()});
        x++;
    }
    //creates list with days
    for (let i = 1; i <= 31; i++) {
        let x = 1;
        varDay.push({id: x, name: i.toString()});
        x++;
    }

    this.setState({
      year: varYear,
      month: [
        {id: '1', name: 'Januari'},
        {id: '2', name: 'Februari'},
        {id: '3', name: 'Mars'},
        {id: '3', name: 'April'}
      ],
      day: varDay
    })
  }




  render () {
    const { year } = this.state;
    const { month } = this.state;
    const { day } = this.state;
    console.log(this.state);

    let yearList = year.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    });

    let monthList = month.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    });

    let dayList = day.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    });


    return (
      <div>
        <select className="myDate">
          {yearList}
        </select>
        <select className="myDate">
          {monthList}
        </select>
        <select className="myDate">
          {dayList}
        </select>
      </div>
    );
  }
}


export default DatePicker
