import React from 'react';
import moment from 'moment';
import Date from 'components/date';
import DaysLeft from 'components/days_left';
import PercentPassed from 'components/percent_passed'
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

  get daysLeft(){
    const {endDate} = this.state;
    if (!endDate) return null;

    const endDateObj = moment(endDate);
    const today = moment();
    const diff = endDateObj.diff(today);
    const duration = moment.duration(diff);
    const daysLeft = Math.ceil(duration.asDays()) || 0;
    
    return daysLeft;
  };

  get percent(){
    const {endDate, startDate} = this.state;
    if (!endDate || !startDate) return null;

    return 50;
  }

  render() {
    const {endDate, startDate} = this.state;

    return (
      <div className="app">
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
        <DaysLeft number={this.daysLeft} />
        <PercentPassed percent={this.percent} />
      </div>
    );
  }
}
