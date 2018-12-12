import React, { Component } from 'react';
import './App.css';
import './config/qlikConfig';
// import QdtComponent from './qdt-chart/qdtChart';
import SideBarContainer from './Containers/sidebar-container/sidebarContainer';
import TopBarContainer from './Containers/topbar-container/topbarContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBarContainer />
        <TopBarContainer />
        {/* <QdtComponent type={testViz.type} props={testViz.props} /> */}
      </div>
    );
  }
}

export default App;
