import React from 'react';
import PropTypes from 'prop-types';
import './segmentInfo.css';

const SegmentInfoComponent = props => {
  const styles = { ...props.styles };
  const text = props.text;

  return (
    <div
      className="segment-info-component"
      aria-haspopup="false"
      aria-expanded="false"
      style={styles}
    >
      {text}
    </div>
  );
};

SegmentInfoComponent.propTypes = {
  styles: PropTypes.object,
  text: PropTypes.string.isRequired
};

export default SegmentInfoComponent;
