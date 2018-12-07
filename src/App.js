import React, { Component } from 'react';
import './App.css';
import './config/qlikConfig';
import QdtComponent from './qdt-chart/qdtChart';

const testViz = {
  type: 'QdtViz',
  props: {
    type: 'barchart',
    id: 'JpnjCmh',
    height: '300px',
    exportData: true,
    exportImg: true,
    exportImgOptions: { width: 600, height: 400, format: 'JPG' },
    exportPdf: true,
    exportPdfOptions: { documentSize: { width: 300, height: 150 } }
  }
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <QdtComponent type={testViz.type} props={testViz.props} />
      </div>
    );
  }
}

export default App;
