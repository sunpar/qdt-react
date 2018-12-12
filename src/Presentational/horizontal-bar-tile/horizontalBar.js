import React from 'react';
import PropTypes from 'prop-types';
import './topbar.css';

const TopBarComponent = props => {
  const styles = { ...props.styles };

  return (
    <div className="top-bar-component" style={styles}>
      {props.children}
    </div>
  );
};

TopBarComponent.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object
};

export default TopBarComponent;
