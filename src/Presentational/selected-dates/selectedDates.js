import React from 'react';
import PropTypes from 'prop-types';
import './selectedDates.css';

const SelectedDatesComponent = props => {
  const styles = { ...props.styles };
  const text = props.text;

  return (
    <div
      className="selected-dates-component"
      style={styles}
    >
      {text}
    </div>
  );
};

SelectedDatesComponent.propTypes = {
  styles: PropTypes.object,
  text: PropTypes.string.isRequired
};

export default SelectedDatesComponent;
