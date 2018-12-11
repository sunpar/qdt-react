import React, { Component } from 'react';
import './App.css';
import './config/qlikConfig';
// import QdtComponent from './qdt-chart/qdtChart';
import SideBarContent from './Containers/sidebar-content/sidebarContent';
import TopBarContent from './Containers/topbar-content/topbarContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBarContent />
        <TopBarContent />
        {/* <QdtComponent type={testViz.type} props={testViz.props} /> */}
      </div>
    );
  }
}

export default App;
