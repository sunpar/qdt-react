import React, { Component } from 'react';
import { QlikContext } from '../../config/qlikConfig';
import SideBarComponent from '../../Presentational/sidebar/sidebar';
import BrandTextComponent from '../../Presentational/brand-text/brandText';
import SegmentInfoComponent from '../../Presentational/segment-info/segmentInfo';
import NavLinksListComponent from '../../Presentational/nav-links-list/navLinksList';
import FiberSmartRecord from '@material-ui/icons/FiberSmartRecord';
import People from '@material-ui/icons/People';
import HowToVote from '@material-ui/icons/HowToVote';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Tv from '@material-ui/icons/Tv';
import Business from '@material-ui/icons/Business';
import Favorite from '@material-ui/icons/Favorite';
import WbIncandescent from '@material-ui/icons/WbIncandescent';
import ViewList from '@material-ui/icons/ViewList';
import Language from '@material-ui/icons/Language';

const brandWords = [
  { id: 1, text: 'SPIRE', styles: { fontWeight: 700 } },
  { id: 2, text: ' TURNKEY', styles: { fontWeight: 300 } }
];

const brandStyles = {
  paddingTop: '20px',
  paddingBottom: '.3125rem'
};

const iconStyle = {
  fontSize: '14px',
  verticalAlign: 'middle',
  marginRight: '5px'
};

const links = [
  {
    id: 1,
    text: 'Segment Summary',
    href: '#',
    iconRender: () => <FiberSmartRecord style={iconStyle} />
  },
  {
    id: 2,
    text: 'Audience Profile',
    href: '#',
    iconRender: () => <People style={iconStyle} />
  },
  {
    id: 3,
    text: 'Audience Attributes',
    href: '#',
    iconRender: () => <HowToVote style={iconStyle} />
  },
  {
    id: 4,
    text: 'Shopping Interests',
    href: '#',
    iconRender: () => <ShoppingCart style={iconStyle} />
  },
  {
    id: 5,
    text: 'Media Interests',
    href: '#',
    iconRender: () => <Tv style={iconStyle} />
  },
  {
    id: 6,
    text: 'Business/Occupation',
    href: '#',
    iconRender: () => <Business style={iconStyle} />
  },
  {
    id: 7,
    text: 'CN Brand Affinities',
    href: '#',
    iconRender: () => <Favorite style={iconStyle} />
  },
  {
    id: 8,
    text: 'Topic Affinities',
    href: '#',
    iconRender: () => <WbIncandescent style={iconStyle} />
  },
  {
    id: 9,
    text: 'Top Urls',
    href: '#',
    iconRender: () => <ViewList style={iconStyle} />
  },
  {
    id: 10,
    text: 'Geographics',
    href: '#',
    iconRender: () => <Language style={iconStyle} />
  }
];

class SideBarContainer extends Component {
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
      </SideBarComponent>
    );
  }
}

SideBarContainer.contextType = QlikContext;

export default SideBarContainer;
