import React from 'react';
import MainContentComponent from '../../Presentational/main-content/mainContent';
import HorizontalSectionComponent from '../../Presentational/horizontal-section/horizontalSection';
import QdtComponent from '../qdt-component/QdtComponent';
import './mainContentContainer.css';

const tile2 = {
  tileId: 'audience-profile-tile',
  title: 'Audience Profile',
  chart1: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'zfKwZmv',
      height: '200px'
    }
  },
  chart2: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'NYTqQp',
      height: '200px'
    }
  },
  chart3: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'LjpEaF',
      height: '200px'
    }
  }
};

const tile3 = {
  tileId: 'audience-attributes-tile',
  title: 'Audience Attributes',
  chart1: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'gkrJ',
      height: '200px'
    }
  },
  chart2: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'SZTWQj',
      height: '200px'
    }
  },
  chart3: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'UFdSdZ',
      height: '200px'
    }
  }
};

const tile4 = {
  tileId: 'shopping-interests-tile',
  title: 'Shopping Interests',
  chart1: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: '2976a18c-4178-4f98-ba0e-654962ed27b1',
      height: '200px'
    }
  },
  chart2: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'dffd63dd-332e-4927-a60d-9494dfe728f8',
      height: '200px'
    }
  },
  chart3: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'dae0f9a9-ea61-4e24-932b-af0055810b38',
      height: '200px'
    }
  }
};

const tile5 = {
  tileId: 'media-interests-tile',
  title: 'Media Interests',
  chart1: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'jgLntgv',
      height: '200px'
    }
  },
  chart2: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'eAqaqT',
      height: '200px'
    }
  },
  chart3: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'EPwRvPt',
      height: '200px'
    }
  }
};

const tile6 = {
  tileId: 'business-occupations-tile',
  title: 'Business and Occupation',
  chart1: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'db5b24a4-c9e7-456d-908e-af2d8a25b047',
      height: '200px'
    }
  },
  chart2: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'd226af48-ed05-41d8-af62-34a59da55c27',
      height: '200px'
    }
  },
  chart3: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'd34c14be-dd6e-4a2d-99b5-5fdecd044a89',
      height: '200px'
    }
  }
};

const tile7 = {
  tileId: 'conde-brand-affinities',
  title: 'CONDÉ NAST BRAND AFFINITIES',
  chart1: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'EjfqVu',
      height: '200px'
    }
  }
};


const MainContentContainer = props => {
  return (
    <MainContentComponent>
      <HorizontalSectionComponent title={tile2.title} tileid={tile2.tileId}>
        <div className="main-content-tile-container">
          <div className="tile-chart">
            <QdtComponent type={tile2.chart1.type} props={tile2.chart1.props} />
          </div>
          <div className="tile-chart">
            <QdtComponent type={tile2.chart2.type} props={tile2.chart2.props} />
          </div>
          <div className="tile-chart">
            <QdtComponent type={tile2.chart3.type} props={tile2.chart3.props} />
          </div>
        </div>
      </HorizontalSectionComponent>
      <HorizontalSectionComponent title={tile3.title} tileid={tile3.tileId}>
        <div className="main-content-tile-container">
          <div className="tile-chart">
            <QdtComponent type={tile3.chart1.type} props={tile3.chart1.props} />
          </div>
          <div className="tile-chart">
            <QdtComponent type={tile3.chart2.type} props={tile3.chart2.props} />
          </div>
          <div className="tile-chart">
            <QdtComponent type={tile3.chart3.type} props={tile3.chart3.props} />
          </div>
        </div>
      </HorizontalSectionComponent>
      <HorizontalSectionComponent title={tile4.title} tileid={tile4.tileId}>
        <div className="main-content-tile-container">
          <div className="tile-chart">
            <QdtComponent type={tile4.chart1.type} props={tile4.chart1.props} />
          </div>
          <div className="tile-chart">
            <QdtComponent type={tile4.chart2.type} props={tile4.chart2.props} />
          </div>
          <div className="tile-chart">
            <QdtComponent type={tile4.chart3.type} props={tile4.chart3.props} />
          </div>
        </div>
      </HorizontalSectionComponent>
      <HorizontalSectionComponent title={tile5.title} tileid={tile5.tileId}>
        <div className="main-content-tile-container">
          <div className="tile-chart">
            <QdtComponent type={tile5.chart1.type} props={tile5.chart1.props} />
          </div>
          <div className="tile-chart">
            <QdtComponent type={tile5.chart2.type} props={tile5.chart2.props} />
          </div>
          <div className="tile-chart">
            <QdtComponent type={tile5.chart3.type} props={tile5.chart3.props} />
          </div>
        </div>
      </HorizontalSectionComponent>
      <HorizontalSectionComponent title={tile6.title} tileid={tile6.tileId}>
        <div className="main-content-tile-container">
          <div className="tile-chart">
            <QdtComponent type={tile6.chart1.type} props={tile6.chart1.props} />
          </div>
          <div className="tile-chart">
            <QdtComponent type={tile6.chart2.type} props={tile6.chart2.props} />
          </div>
          <div className="tile-chart">
            <QdtComponent type={tile6.chart3.type} props={tile6.chart3.props} />
          </div>
        </div>
      </HorizontalSectionComponent>
      <HorizontalSectionComponent title={tile7.title} tileid={tile7.tileId}>
        <div className="main-content-tile-container">
          <div className="tile-chart span-3">
            <QdtComponent type={tile7.chart1.type} props={tile7.chart1.props} />
          </div>
        </div>
      </HorizontalSectionComponent>
    </MainContentComponent>
  );
};

export default MainContentContainer;
