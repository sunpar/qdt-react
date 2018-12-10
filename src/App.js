import React, { Component } from 'react';
import './App.css';
import './config/qlikConfig';
// import QdtComponent from './qdt-chart/qdtChart';
import SideBarComponent from './sidebar/sidebar';
import BrandTextComponent from './brand-text/brandText';
import SegmentInfoComponent from './segment-info/segmentInfo';
import NavLinksListComponent from './nav-links-list/navLinksList';

// const testViz = {
//   type: 'QdtViz',
//   props: {
//     type: 'barchart',
//     id: 'JpnjCmh',
//     height: '300px'
//   }
// };

const brandWords = [
  { id: 1, text: 'SPIRE', styles: { fontWeight: 700 } },
  { id: 2, text: ' TURNKEY', styles: { fontWeight: 300 } }
];

const brandStyles = {
  paddingTop: '20px',
  paddingBottom: '.3125rem'
};

const links = [
  { id: 1, text: 'Segment Summary', href: '#' },
  { id: 2, text: 'Audience Profile', href: '#' },
  { id: 3, text: 'Audience Attributes', href: '#' },
  { id: 4, text: 'Shopping Interests', href: '#' }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBarComponent>
          <BrandTextComponent
            words={brandWords}
            styles={brandStyles}
            link="https://www.google.com"
          />
          <SegmentInfoComponent />
          <NavLinksListComponent links={links} />
        </SideBarComponent>
        {/* <QdtComponent type={testViz.type} props={testViz.props} /> */}
      </div>
    );
  }
}

export default App;
