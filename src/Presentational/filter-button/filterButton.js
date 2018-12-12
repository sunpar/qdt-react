import React from 'react';
import PropTypes from 'prop-types';
import FilterList from '@material-ui/icons/FilterList';
import './filterButton.css';

const FilterButtonComponent = props => {
  const styles = { ...props.styles };
  const buttonStyles = { ...props.buttonStyles };
	const iconStyles = { ...props.iconStyles };
  const clickHandler = props.clickHandler;
  const text = props.text;

  return (
    <div className="filter-button-component" style={styles} onClick={clickHandler}>
      <button type="button" style={buttonStyles}>
        <FilterList style={iconStyles} />
        {text}
      </button>
    </div>
  );
};

FilterButtonComponent.propTypes = {
  styles: PropTypes.object,
	buttonStyles: PropTypes.object,
  iconStyles: PropTypes.object,
  clickHandler: PropTypes.func,
  text: PropTypes.String
};

export default FilterButtonComponent;
