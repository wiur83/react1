import React, { Component } from 'react';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [],
      months: [],
      colours: {}
    };
  }

  componentDidMount() {
    this.setState({
      years: [
        {id: '1', name: '1900'},
        {id: '2', name: '1901'},
        {id: '3', name: '1902'}
      ],
      months: [
        {id: '1', name: 'Januari'},
        {id: '2', name: 'Februari'},
        {id: '3', name: 'Mars'}
      ]
    });
  }


  render () {
    const { months } = this.state;
    const { years } = this.state;

    let monthsList = months.length > 0
    	&& months.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    let yearsList = years.length > 0
      && years.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);



    return (
      <div>
        <select className="mytext">
          {monthsList}
        </select>
        <select className="mytext">
          {yearsList}
        </select>
      </div>
    );
  }
}


export default DatePicker
