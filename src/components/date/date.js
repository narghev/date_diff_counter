import React from 'react';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';
import {FaTimesCircle as ClearIcon} from 'react-icons/fa';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import './date.css';
import 'react-day-picker/lib/style.css';

export default
class FinalDate extends React.PureComponent {
  render(){
    const {
      label,
      date,
      onChange,
      onClear
    } = this.props;
    const value = date ? moment(date).format('DD-MMM-YYYY') : '';
    return(
      <div className="date">
        <span className="label">{label}</span>
        <div>
          <DayPickerInput
            value={value}
            onDayChange={onChange}
            placeholder="Select Date"
          />
          <ClearIcon
            className="clear-date"
            onClick={onClear}
            data-tip="Clear Date"
          />
        </div>
        <ReactTooltip
          place="bottom"
          effect="solid"
          className="tool-tip"
        />
      </div>
    );
  }
}