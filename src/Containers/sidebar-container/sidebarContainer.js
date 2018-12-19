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
import throttle from '../../Util/throttle'

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
    href: '#segment-summary-tile',
    active: true,
    iconRender: () => <FiberSmartRecord style={iconStyle} />
  },
  {
    id: 2,
    text: 'Audience Profile',
    href: '#audience-profile-tile',
    active: false,
    iconRender: () => <People style={iconStyle} />
  },
  {
    id: 3,
    text: 'Audience Attributes',
    href: '#audience-attributes-tile',
    active: false,
    iconRender: () => <HowToVote style={iconStyle} />
  },
  {
    id: 4,
    text: 'Shopping Interests',
    href: '#shopping-interests-tile',
    active: false,
    iconRender: () => <ShoppingCart style={iconStyle} />
  },
  {
    id: 5,
    text: 'Media Interests',
    href: '#media-interests-tile',
    active: false,
    iconRender: () => <Tv style={iconStyle} />
  },
  {
    id: 6,
    text: 'Business/Occupation',
    href: '#business-occupations-tile',
    active: false,
    iconRender: () => <Business style={iconStyle} />
  },
  {
    id: 7,
    text: 'CN Brand Affinities',
    href: '#conde-brand-affinities',
    active: false,
    iconRender: () => <Favorite style={iconStyle} />
  },
  {
    id: 8,
    text: 'Topic Affinities',
    href: '#topic-affinities',
    active: false,
    iconRender: () => <WbIncandescent style={iconStyle} />
  },
  {
    id: 9,
    text: 'Top Urls',
    href: '#top-urls',
    active: false,
    iconRender: () => <ViewList style={iconStyle} />
  },
  {
    id: 10,
    text: 'Geographics',
    href: '#top-geographies',
    active: false,
    iconRender: () => <Language style={iconStyle} />
  }
];

class SideBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      styles: props.styles,
      links
    };

    this.handleScroll = this.handleScroll.bind(this);
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

  componentDidMount() {
    document.addEventListener('scroll', throttle(this.handleScroll, 100));
  }

  handleScroll() {
    for (let i = links.length - 1; i >= 0; i -= 1) {
      const el = document.getElementById(links[i].href.slice(1));
      if (el && el.getBoundingClientRect().top < 60) {
        links.forEach((link, k) => {
          if (k !== i) link.active = false;
          else link.active = true;
        });
        break;
      }
    }
    this.setState(state => ({ ...this.state, links }));
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
