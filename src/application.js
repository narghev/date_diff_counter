import React from 'react';
import Date from 'components/date';
import moment from 'moment';
import {
  getEndDate,
  setEndDate,
  clearEndDate
} from 'helper/date_helper';

export default
class App extends React.Component {

  state = {
    endDate: null
  };

  componentDidMount(){
    const endDate = getEndDate();
    this.setState({endDate});
  }

  onEndDateChange = date => {
    const endDate = moment(date);
    setEndDate(endDate);
    this.setState({endDate});
  }

  clearEndDate = () => {
    clearEndDate();
    this.setState({endDate: null});
  };

  render() {
    const {endDate} = this.state;

    return (
      <Date
        label="End Date"
        date={endDate}
        onChange={this.onEndDateChange}
        onClear={this.clearEndDate}
      />
    );
  }
}
