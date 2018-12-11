import React, { Component } from 'react';
import { QlikContext } from '../../config/qlikConfig';
import TopBarComponent from '../../Presentational/topbar/topbar';
import SelectedDatesComponent from '../../Presentational/selected-dates/selectedDates';

const topBarStyles =  {
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
}
class TopBarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount() {
    
  }

  render() {
    return (<TopBarComponent styles={topBarStyles}>
    <SelectedDatesComponent text='Date: 08/01/2018 - 9/12/2018' styles={selectedDatesStyles}>

    </SelectedDatesComponent>
    </TopBarComponent>);
  }
}

TopBarContent.contextType = QlikContext;

export default TopBarContent;
