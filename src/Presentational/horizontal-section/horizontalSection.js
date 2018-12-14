import React from 'react';
import PropTypes from 'prop-types';
import './horizontalSection.css';

const HorizontalSection = props => {
  const styles = { ...props.styles };

  return (
    <div
      className="horizontal-section-component"
      style={styles}
      id={props.tileid}
    >
      {props.title ? <div className="title">{props.title}</div> : null}
      <div className="content">{props.children}</div>
    </div>
  );
};

HorizontalSection.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
  title: PropTypes.string,
  tileid: PropTypes.string
};

export default HorizontalSection;
