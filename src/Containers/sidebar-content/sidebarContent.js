import React, { Component } from 'react';
import { QlikContext } from '../../config/qlikConfig';
// import QdtComponent from './qdt-chart/qdtChart';
import SideBarComponent from '../../Presentational/sidebar/sidebar';
import BrandTextComponent from '../../Presentational/brand-text/brandText';
import SegmentInfoComponent from '../../Presentational/segment-info/segmentInfo';
import NavLinksListComponent from '../../Presentational/nav-links-list/navLinksList';

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
  { id: 4, text: 'Shopping Interests', href: '#' },
  { id: 5, text: 'Media Interests', href: '#' },
  { id: 6, text: 'Business/Occupation', href: '#' },
  { id: 7, text: 'CN Brand Affinities', href: '#' },
  { id: 8, text: 'Topic Affinities', href: '#' },
  { id: 9, text: 'Top Urls', href: '#' },
  { id: 10, text: 'Geographics', href: '#' }
];

class SideBarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      styles: props.styles
    };
  }

  componentWillMount() {
    let { qdtComponents } = this.context;
    qdtComponents.qDocPromise
      .then(doc => {
        return doc.getVariableByName('SegmentName');
      })
      .then(variable => {
        return variable.getLayout();
      })
      .then(layout => {
        this.setState({ ...this.state, text: layout.qText });
      });
  }

  render() {
    return (
      <SideBarComponent>
        <BrandTextComponent
          words={brandWords}
          styles={brandStyles}
          link="https://www.google.com"
        />
        <SegmentInfoComponent text={this.state.text} />
        <NavLinksListComponent links={links} />
        {/* <QdtComponent type={testViz.type} props={testViz.props} /> */}
      </SideBarComponent>
    );
  }
}

SideBarContent.contextType = QlikContext;

export default SideBarContent;
