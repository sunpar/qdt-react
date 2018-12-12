import React, { Component } from 'react';
import { QlikContext } from '../../config/qlikConfig';
import TopBarComponent from '../../Presentational/topbar/topbar';
import SelectedDatesComponent from '../../Presentational/selected-dates/selectedDates';
import FilterButtonComponent from '../../Presentational/filter-button/filterButton';
import FilterPaneContainer from '../filter-pane-container/filterPaneContainer';

const topBarStyles = {
  marginLeft: '200px',
  width: 'calc(100% - 200px)',
  backgroundColor: '#FFFFFF',
  borderBottom: '1px solid #E6E6E6',
  cursor: 'pointer'
};

const selectedDatesStyles = {
  padding: '10px 5px',
  display: 'inline-block',
  marginLeft: '15px'
};

const filterIconStyles = {
  fontSize: '11px',
  marginRight: '5px'
};

const filterStyles = {
  float: 'right'
};

const filterText = 'Filter';

class TopBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDates: 'Date: 08/01/2018 - 9/12/2018',
      isOpenFilters: false
    };
    this.filterClickHandler = this.filterClickHandler.bind(this);
  }

  componentWillMount() {}

  filterClickHandler() {
    this.setState(state => ({
      ...state,
      isOpenFilters: !state.isOpenFilters
    }));
  }

  render() {
    return (
      <TopBarComponent styles={topBarStyles}>
        {this.state.isOpenFilters ? (
          <FilterPaneContainer clickHandler={this.filterClickHandler} />
        ) : (
          <React.Fragment>
            <SelectedDatesComponent
              text={this.state.selectedDates}
              styles={selectedDatesStyles}
            />
            <FilterButtonComponent
              styles={filterStyles}
              iconStyles={filterIconStyles}
              clickHandler={this.filterClickHandler}
              text={filterText}
            />
          </React.Fragment>
        )}
      </TopBarComponent>
    );
  }
}

TopBarContainer.contextType = QlikContext;

export default TopBarContainer;
