import React, { Component } from 'react';
import './App.css';
import './config/qlikConfig';
import QdtComponent from './qdt-chart/qdtChart';
import SideBarComponent from './sidebar/sidebar';
import BrandTextComponent from './brand-text/brandText';

const testViz = {
  type: 'QdtViz',
  props: {
    type: 'barchart',
    id: 'JpnjCmh',
    height: '300px'
  }
};

const brandWords = [
  { id: 1, text: 'SPIRE', styles: { fontWeight: 700 } },
  { id: 2, text: ' TURNKEY', styles: { fontWeight: 300 } }
];

const brandStyles = {
  paddingTop: '20px',
  paddingBottom: '.3125rem'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBarComponent>
          <BrandTextComponent words={brandWords} styles={brandStyles} />
        </SideBarComponent>
        {/* <QdtComponent type={testViz.type} props={testViz.props} /> */}
      </div>
    );
  }
}

export default App;
