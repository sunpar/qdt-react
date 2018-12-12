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
  height: '100%',
  verticalAlign: 'top'
};

const filterButtonStyles = {
  height: '100%'
};

const filterText = 'Hide Filters';

const filters = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    type: 'QdtFilter',
    props: {
      cols: ['Income'],
      placeholder: 'Income',
      expanded: false,
      autoSortByState: 0,
      showStateInDropdown: true
    }
  },
  {
    id: 4,
    type: 'QdtFilter',
    props: {
      cols: ['Topic'],
      placeholder: 'Topic',
      expanded: false,
      autoSortByState: 0,
      showStateInDropdown: true
    }
  },
  {
    id: 5,
    type: 'QdtFilter',
    props: {
      cols: ['Brand'],
      placeholder: 'Brand',
      expanded: false,
      autoSortByState: 0,
      showStateInDropdown: true
    }
  },
  {
    id: 6,
    type: 'QdtFilter',
    props: {
      cols: ['Region'],
      placeholder: 'Region',
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
      <div className="filter-pane-filter-holder">
        {filters.map(filter => (
          <div key={filter.id} className="filter-pane-filter">
            <QdtComponent type={filter.type} props={filter.props} />
          </div>
        ))}
      </div>
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
