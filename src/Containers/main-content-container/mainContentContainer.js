import React, { Component } from 'react';
import MainContentComponent from '../../Presentational/main-content/mainContent';
import HorizontalSectionComponent from '../../Presentational/horizontal-section/horizontalSection';
import QdtComponent from '../qdt-component/QdtComponent';
import GlanceBoxComponent from '../../Presentational/glance-box/glanceBox';
import audience from '../../Images/audience.png';
import './mainContentContainer.css';
import { QlikContext } from '../../config/qlikConfig';

const tile1 = {
  titleId: 'segment-summary-tile',
  title: 'Segment Summary',
  chart1: {
    iconRender: () => <img src={audience} alt="Audience" />,
    title: 'Audience Profile',
    text1: 'TEST1',
    text2: 'TEST2',
    text3: 'TEST3',
    render: false
  },
  chart2: {
    iconRender: () => <img src={audience} alt="Audience" />,
    title: 'Topic Affinities',
    text1: 'TEST1',
    text2: 'TEST2',
    text3: 'TEST3',
    render: false
  },
  chart3: {
    iconRender: () => <img src={audience} alt="Audience" />,
    title: 'Brand Affinities',
    text1: 'TEST1',
    text2: 'TEST2',
    text3: 'TEST3',
    render: false
  },
  chart4: {
    iconRender: () => <img src={audience} alt="Audience" />,
    title: 'Top Geographies',
    text1: 'TEST1',
    text2: 'TEST2',
    text3: 'TEST3',
    render: false
  }
};

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
      height: '400px'
    }
  }
};

const tile8 = {
  tileId: 'topic-affinities',
  title: 'Topic Affinities',
  chart1: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'qsumWAQ',
      height: '400px'
    }
  }
};

const tile9 = {
  tileId: 'top-urls',
  title: 'Top Urls',
  chart1: {
    type: 'QdtViz',
    props: {
      type: 'barchart',
      id: 'vNtpvK',
      height: '540px'
    }
  }
};

const tile10 = {
  tileId: 'top-geographies',
  title: 'Top Geographies',
  chart1: {
    type: 'QdtViz',
    props: {
      type: 'map',
      id: 'jcbPwKk',
      height: '540px'
    }
  }
};

class MainContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tile1,
      tile2,
      tile3,
      tile4,
      tile5,
      tile6,
      tile7,
      tile8,
      tile9,
      tile10
    };
  }

  componentWillMount() {
    let { qdtComponents } = this.context;
    let topStatesObjProps = {
      qInfo: {
        qType: 'viz'
      },
      qHyperCubeDef: {
        qDimensions: [
          {
            qDef: {
              qFieldDefs: ['State'],
              qFieldLabels: ['State']
            }
          }
        ],
        qMeasures: [
          {
            qDef: {
              qDef: `=(Sum({<State-={'NA'}>} SegmentPvs)/Sum(TOTAL {<State-={'NA'}>} SegmentPvs))
            /
            (Sum({<State-={'NA'}>} NetworkPvs)/Sum(TOTAL {<State-={'NA'}>} NetworkPvs))`
            },
            qSortBy: {
              qSortByNumeric: -1
            }
          }
        ],
        qInterColumnSortOrder: [1, 0],
        qInitialDataFetch: [
          {
            qTop: 0,
            qHeight: 500,
            qLeft: 0,
            qWidth: 17
          }
        ],
        qSuppressZero: true,
        qSuppressMissing: true
      }
    };

    let topBrandsObjProps = {
      qInfo: {
        qType: 'viz'
      },
      qHyperCubeDef: {
        qDimensions: [
          {
            qDef: {
              qFieldDefs: ['Brand'],
              qFieldLabels: ['Brand']
            }
          }
        ],
        qMeasures: [
          {
            qDef: {
              qDef: `=(Sum({<Brand-={'NA'}>} SegmentPvs)/Sum(TOTAL {<Brand-={'NA'}>} SegmentPvs))
            /
            (Sum({<Brand-={'NA'}>} NetworkPvs)/Sum(TOTAL {<Brand-={'NA'}>} NetworkPvs))`
            },
            qSortBy: {
              qSortByNumeric: -1
            }
          }
        ],
        qInterColumnSortOrder: [1, 0],
        qInitialDataFetch: [
          {
            qTop: 0,
            qHeight: 500,
            qLeft: 0,
            qWidth: 17
          }
        ],
        qSuppressZero: true,
        qSuppressMissing: true
      }
    };

    let topTopicsObjProps = {
      qInfo: {
        qType: 'viz'
      },
      qHyperCubeDef: {
        qDimensions: [
          {
            qDef: {
              qFieldDefs: ['Topic'],
              qFieldLabels: ['Topic']
            }
          }
        ],
        qMeasures: [
          {
            qDef: {
              qDef: `=(Sum({<Topic-={'NA'}>} SegmentPvs)/Sum(TOTAL {<Topic-={'NA'}>} SegmentPvs))
            /
            (Sum({<Topic-={'NA'}>} NetworkPvs)/Sum(TOTAL {<Topic-={'NA'}>} NetworkPvs))`
            },
            qSortBy: {
              qSortByNumeric: -1
            }
          }
        ],
        qInterColumnSortOrder: [1, 0],
        qInitialDataFetch: [
          {
            qTop: 0,
            qHeight: 500,
            qLeft: 0,
            qWidth: 17
          }
        ],
        qSuppressZero: true,
        qSuppressMissing: true
      }
    };

    let sentenceObjProps = {
      qInfo: {
        qType: 'qValueExpr'
      },
      age: {
        qStringExpression: `=if((Sum({<Age-= {'NA', ''}>} if(Age = '<25', 15, if(Age = '25-34', 30, if(Age = '35-44', 40, if(Age = '45-50', 54, if(Age = '55-64', 60, if(Age = '65+', 80))))))*  SegmentPvs)/ sum({<Age-= {'NA', ''}>} total SegmentPvs) )/(Sum({<Age-= {'NA', ''}>}if(Age = '<25', 15,if(Age = '25-34', 30,if(Age = '35-44', 40,if(Age = '45-54', 50,if(Age = '55-64', 60,if(Age = '65+', 80))))))*  NetworkPvs ) / sum({<Age-= {'', 'NA'}>} total NetworkPvs)) > 0.95, 'Older than average',if((Sum({<Age-= {'NA', ''}>} if(Age = '<25', 15, if(Age = '25-34', 30, if(Age = '35-44', 40, if(Age = '45-50', 54, if(Age = '55-64', 60, if(Age = '65+', 80))))))*  SegmentPvs)/ sum({<Age-= {'NA', ''}>} total SegmentPvs) )/(Sum({<Age-= {'NA', ''}>}if(Age = '<25', 15,if(Age = '25-34', 30,if(Age = '35-44', 40,if(Age = '45-54', 50,if(Age = '55-64', 60,if(Age = '65+', 80))))))*  NetworkPvs ) / sum({<Age-= {'', 'NA'}>} total NetworkPvs)) > 0.90, 'Average age', 'Younger than Average'))`
      },
      gender: {
        qStringExpression: `= if((Sum({<Gender= {'Male'}>} SegmentPvs)/ sum({<Gender= {'Male', 'Female'}>} total SegmentPvs) )/(Sum({<Gender={'Male'}>} NetworkPvs ) / sum({<Gender={'Male', 'Female'}>} total NetworkPvs)) > 1, 'Over-index male', 'Over-index female')`
      },
      income: {
        qStringExpression: `= if((Sum({<Income-={'NA', ''}>}if(Income = '<75k', 50,if(Income = '75-<125k', 100,if(Income = '125k+', 150, 0)))*  SegmentPvs)/ sum({<Income-={'NA', ''}>} total SegmentPvs) )/(Sum({<Income-={'NA', ''}>}if(Income = '<75k', 50,if(Income = '75-<125k', 100,if(Income = '125k+', 150, 0)))*  NetworkPvs ) / sum({<Income-={'NA', ''}>} total NetworkPvs)) > 1, 'Higher income', 'Lower income')`
      }
    };

    qdtComponents.qDocPromise
      .then(doc => {
        return doc.createSessionObject(topStatesObjProps);
      })
      .then(obj => {
        const updateState = () => {
          obj.getLayout().then(layout => {
            this.setState(state => {
              const matrix = layout.qHyperCube.qDataPages[0].qMatrix;
              const tile1 = {
                ...state.tile1,
                chart4: {
                  ...state.tile1.chart4,
                  text1: matrix[0][0].qText,
                  text2: matrix[1][0].qText,
                  text3: matrix[2][0].qText
                }
              };
              return {
                ...state,
                tile1
              };
            });
          });
        };
        obj.on('changed', () => updateState());
        updateState();
      });

    qdtComponents.qDocPromise
      .then(doc => {
        return doc.createSessionObject(topBrandsObjProps);
      })
      .then(obj => {
        const updateState = () => {
          obj.getLayout().then(layout => {
            this.setState(state => {
              const matrix = layout.qHyperCube.qDataPages[0].qMatrix;
              const tile1 = {
                ...state.tile1,
                chart3: {
                  ...state.tile1.chart3,
                  text1: matrix[0][0].qText,
                  text2: matrix[1][0].qText,
                  text3: matrix[2][0].qText
                }
              };
              return {
                ...state,
                tile1
              };
            });
          });
        };
        obj.on('changed', () => updateState());
        updateState();
      });

    qdtComponents.qDocPromise
      .then(doc => {
        return doc.createSessionObject(topTopicsObjProps);
      })
      .then(obj => {
        const updateState = () => {
          obj.getLayout().then(layout => {
            this.setState(state => {
              const matrix = layout.qHyperCube.qDataPages[0].qMatrix;
              const tile1 = {
                ...state.tile1,
                chart2: {
                  ...state.tile1.chart2,
                  text1: matrix[0][0].qText,
                  text2: matrix[1][0].qText,
                  text3: matrix[2][0].qText
                }
              };
              return {
                ...state,
                tile1
              };
            });
          });
        };
        obj.on('changed', () => updateState());
        updateState();
      });
  }

  render() {
    const {
      tile1,
      tile2,
      tile3,
      tile4,
      tile5,
      tile6,
      tile7,
      tile8,
      tile9,
      tile10
    } = this.state;

    return (
      <MainContentComponent>
        <HorizontalSectionComponent title={tile1.title} tileid={tile2.tileId}>
          <div className="main-content-tile-container-fourths">
            <div className="tile-chart">
              <GlanceBoxComponent {...tile1.chart1} />
            </div>
            <div className="tile-chart">
              <GlanceBoxComponent {...tile1.chart2} />
            </div>
            <div className="tile-chart">
              <GlanceBoxComponent {...tile1.chart3} />
            </div>
            <div className="tile-chart">
              <GlanceBoxComponent {...tile1.chart4} />
            </div>
          </div>
        </HorizontalSectionComponent>
        <HorizontalSectionComponent title={tile2.title} tileid={tile2.tileId}>
          <div className="main-content-tile-container">
            <div className="tile-chart">
              <QdtComponent
                type={tile2.chart1.type}
                props={tile2.chart1.props}
              />
            </div>
            <div className="tile-chart">
              <QdtComponent
                type={tile2.chart2.type}
                props={tile2.chart2.props}
              />
            </div>
            <div className="tile-chart">
              <QdtComponent
                type={tile2.chart3.type}
                props={tile2.chart3.props}
              />
            </div>
          </div>
        </HorizontalSectionComponent>
        <HorizontalSectionComponent title={tile3.title} tileid={tile3.tileId}>
          <div className="main-content-tile-container">
            <div className="tile-chart">
              <QdtComponent
                type={tile3.chart1.type}
                props={tile3.chart1.props}
              />
            </div>
            <div className="tile-chart">
              <QdtComponent
                type={tile3.chart2.type}
                props={tile3.chart2.props}
              />
            </div>
            <div className="tile-chart">
              <QdtComponent
                type={tile3.chart3.type}
                props={tile3.chart3.props}
              />
            </div>
          </div>
        </HorizontalSectionComponent>
        <HorizontalSectionComponent title={tile4.title} tileid={tile4.tileId}>
          <div className="main-content-tile-container">
            <div className="tile-chart">
              <QdtComponent
                type={tile4.chart1.type}
                props={tile4.chart1.props}
              />
            </div>
            <div className="tile-chart">
              <QdtComponent
                type={tile4.chart2.type}
                props={tile4.chart2.props}
              />
            </div>
            <div className="tile-chart">
              <QdtComponent
                type={tile4.chart3.type}
                props={tile4.chart3.props}
              />
            </div>
          </div>
        </HorizontalSectionComponent>
        <HorizontalSectionComponent title={tile5.title} tileid={tile5.tileId}>
          <div className="main-content-tile-container">
            <div className="tile-chart">
              <QdtComponent
                type={tile5.chart1.type}
                props={tile5.chart1.props}
              />
            </div>
            <div className="tile-chart">
              <QdtComponent
                type={tile5.chart2.type}
                props={tile5.chart2.props}
              />
            </div>
            <div className="tile-chart">
              <QdtComponent
                type={tile5.chart3.type}
                props={tile5.chart3.props}
              />
            </div>
          </div>
        </HorizontalSectionComponent>
        <HorizontalSectionComponent title={tile6.title} tileid={tile6.tileId}>
          <div className="main-content-tile-container">
            <div className="tile-chart">
              <QdtComponent
                type={tile6.chart1.type}
                props={tile6.chart1.props}
              />
            </div>
            <div className="tile-chart">
              <QdtComponent
                type={tile6.chart2.type}
                props={tile6.chart2.props}
              />
            </div>
            <div className="tile-chart">
              <QdtComponent
                type={tile6.chart3.type}
                props={tile6.chart3.props}
              />
            </div>
          </div>
        </HorizontalSectionComponent>
        <HorizontalSectionComponent title={tile7.title} tileid={tile7.tileId}>
          <div className="main-content-tile-container">
            <div className="tile-chart span-3">
              <QdtComponent
                type={tile7.chart1.type}
                props={tile7.chart1.props}
              />
            </div>
          </div>
        </HorizontalSectionComponent>
        <HorizontalSectionComponent title={tile8.title} tileid={tile8.tileId}>
          <div className="main-content-tile-container">
            <div className="tile-chart span-3">
              <QdtComponent
                type={tile8.chart1.type}
                props={tile8.chart1.props}
              />
            </div>
          </div>
        </HorizontalSectionComponent>
        <HorizontalSectionComponent title={tile9.title} tileid={tile9.tileId}>
          <div className="main-content-tile-container">
            <div className="tile-chart span-3">
              <QdtComponent
                type={tile9.chart1.type}
                props={tile9.chart1.props}
              />
            </div>
          </div>
        </HorizontalSectionComponent>
        <HorizontalSectionComponent title={tile10.title} tileid={tile10.tileId}>
          <div className="main-content-tile-container">
            <div className="tile-chart span-3">
              <QdtComponent
                type={tile10.chart1.type}
                props={tile10.chart1.props}
              />
            </div>
          </div>
        </HorizontalSectionComponent>
      </MainContentComponent>
    );
  }
}

MainContentContainer.contextType = QlikContext;

export default MainContentContainer;
