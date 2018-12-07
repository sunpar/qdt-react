import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css';

const SideBarComponent = props => {
  const styles = { ...props.styles };

  return (
    <div className="side-bar-component" style={styles}>
      {props.children}
    </div>
  );
};

SideBarComponent.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object
};

export default SideBarComponent;
