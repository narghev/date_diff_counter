import React from 'react';
import Date from 'components/date';
import moment from 'moment';
import {
  getDate,
  setDate,
  clearDate
} from 'helper/date_helper';

import './application.css';

const end = 'end';
const start = 'start';

export default
class App extends React.Component {

  state = {
    startDate: null,
    endDate: null
  };

  componentDidMount(){
    const endDate = getDate(end);
    const startDate = getDate(start);
    this.setState({endDate, startDate});
  }

  onEndDateChange = date => {
    const endDate = moment(date);
    setDate(end, endDate);
    this.setState({endDate});
  }

  clearEndDate = () => {
    clearDate(end);
    this.setState({endDate: null});
  };

  onStartDateChange = date => {
    const startDate = moment(date);
    setDate(start, startDate);
    this.setState({startDate});
  }

  clearStartDate = () => {
    clearDate(start);
    this.setState({startDate: null});
  };

  render() {
    const {endDate, startDate} = this.state;

    return (
      <div className="start_end_wrapper">
        <Date
          label="Start Date"
          date={startDate}
          onChange={this.onStartDateChange}
          onClear={this.clearStartDate}
        />
        <Date
          label="End Date"
          date={endDate}
          onChange={this.onEndDateChange}
          onClear={this.clearEndDate}
          className="end"
        />
      </div>
    );
  }
}
