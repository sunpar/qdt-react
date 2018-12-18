import React from 'react';
import PropTypes from 'prop-types';
import './glanceBox.css';

const GlanceBoxComponent = props => {
  const styles = { ...props.styles };
  
  return (
    <div className="glance-box-component" style={styles}>
      {props.iconRender() ? (
        <div className="icons-glance">{props.iconRender()}</div>
      ) : null}
      {props.title ? <div className="glance-title">{props.title}</div> : null}
      {props.text1 ? <div className="glance-text">{props.text1}</div> : null}
      {props.text2 ? <div className="glance-text">{props.text2}</div> : null}
      {props.text3 ? <div className="glance-text">{props.text3}</div> : null}
    </div>
  );
};

GlanceBoxComponent.propTypes = {
  styles: PropTypes.object,
  title: PropTypes.string.isRequired,
  iconRender: PropTypes.func,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string
};

export default GlanceBoxComponent;
