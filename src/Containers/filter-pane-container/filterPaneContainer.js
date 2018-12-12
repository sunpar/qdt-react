import React from 'react';
import PropTypes from 'prop-types';
import './filter-pane-container.css';
import FilterButtonComponent from '../../Presentational/filter-button/filterButton';
import QdtComponent from '../qdt-component/QdtComponent';

const filterIconStyles = {
  fontSize: '11px',
  marginRight: '5px'
};

const filterStyles = {
  float: 'right',
  height: '100%'
};

const filterButtonStyles = {
  height: '100%'
};

const filterText = 'Hide Filters';

const filters = [
  {
    type: 'QdtFilter',
    props: {
      cols: ['Age'],
      placeholder: 'Age',
      expanded: false,
      autoSortByState: 0,
      showStateInDropdown: true
    }
  },
  {
    type: 'QdtFilter',
    props: {
      cols: ['Gender'],
      placeholder: 'Gender',
      expanded: false,
      autoSortByState: 0,
      showStateInDropdown: true
    }
  },
  {
    type: 'QdtFilter',
    props: {
      cols: ['Income'],
      placeholder: 'Case Owner',
      expanded: false,
      autoSortByState: 0,
      showStateInDropdown: true
    }
  },
  {
    type: 'QdtFilter',
    props: {
      cols: ['Topic'],
      placeholder: 'Case Owner',
      expanded: false,
      autoSortByState: 0,
      showStateInDropdown: true
    }
  },
  {
    type: 'QdtFilter',
    props: {
      cols: ['Brand'],
      placeholder: 'Case Owner',
      expanded: false,
      autoSortByState: 0,
      showStateInDropdown: true
    }
  },
  {
    type: 'QdtFilter',
    props: {
      cols: ['Region'],
      placeholder: 'Case Owner',
      expanded: false,
      autoSortByState: 0,
      showStateInDropdown: true
    }
  }
];

const FilterPaneContainer = props => {
  const filterClickHandler = props.clickHandler ? props.clickHandler : () => {};
  return (
    <div className="filter-pane-container">
      {filters.map(filter => (
        <div className="filter-pane-filter">
          <QdtComponent type={filter.type} props={filter.props} />
        </div>
      ))}
      {/* <QdtComponent type={filters.type} props={filters.props} /> */}

      <FilterButtonComponent
        styles={filterStyles}
        iconStyles={filterIconStyles}
        clickHandler={filterClickHandler}
        buttonStyles={filterButtonStyles}
        text={filterText}
      />
    </div>
  );
};

FilterPaneContainer.propTypes = {
  clickHandler: PropTypes.func
};

export default FilterPaneContainer;
