import React, { Component } from 'react';
import './App.css';
import './config/qlikConfig';
// import QdtComponent from './qdt-chart/qdtChart';
import SideBarContainer from './Containers/sidebar-container/sidebarContainer';
import TopBarContainer from './Containers/topbar-container/topbarContainer';
import MainContentContainer from './Containers/main-content-container/mainContentContainer';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="sidebar">
          <SideBarContainer />
        </div>
        <div className="main-content">
          <div className="filter-pane">
            <TopBarContainer />
          </div>
          <div className="app-content">
            <MainContentContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
