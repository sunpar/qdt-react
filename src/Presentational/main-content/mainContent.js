import React from 'react';
import PropTypes from 'prop-types';
import './mainContent.css';

const MainContentComponent = props => {
  const styles = { ...props.styles };

  return (
    <div className="main-content-component" style={styles}>
      {props.children}
    </div>
  );
};

MainContentComponent.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object
};

export default MainContentComponent;
