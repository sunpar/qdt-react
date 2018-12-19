import React, { Component } from 'react';
import { QlikContext } from '../../config/qlikConfig';
import './appSelectionContainer.css';

class AppSelectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selected: {
          text: '',
          variable: ''
      }
    };
    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSubmitApp = props.onSubmitApp;
  }

  componentDidMount() {
    let { eApp, cApp } = this.context;
    let segmentProps = {
      qInfo: {
        qType: 'viz'
      },
      qHyperCubeDef: {
        qDimensions: [
          {
            qDef: {
              qFieldDefs: ['Segment Name'],
              qFieldLabels: ['Segment Name']
            }
          },
          {
            qDef: {
              qFieldDefs: ['Segment'],
              qFieldLabels: ['Segment']
            }
          }
        ],
        qMeasures: [
          {
            qDef: {
              qDef: `sum({1}1)`
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
            qHeight: 1000,
            qLeft: 0,
            qWidth: 2
          }
        ],
        qSuppressZero: true,
        qSuppressMissing: true
      }
    };
    eApp
      .then(doc => {
        return doc.createSessionObject(segmentProps);
      })
      .then(obj => {
        return obj.getLayout();
      })
      .then(layout => {
        const matrix = layout.qHyperCube.qDataPages[0].qMatrix;
        const options = matrix.map((row, i) => {
          return {
            key: i,
            text: row[0].qText,
            variable: row[1].qText,
            selected: false
          };
        });
        this.setState(state => ({
          ...state,
          options
        }));
      });
  }

  handleOptionClick(selKey) {
    let newSelected;
    const newList = this.state.options.map(opt => {
      if (opt.key === selKey) {
        newSelected = {
          text: opt.text,
          variable: opt.variable
        };
        return {
          ...opt,
          selected: true
        };
      } else {
        return {
          ...opt,
          selected: false
        };
      }
    });
    this.setState(state => ({
      ...state,
      options: newList,
      selected: newSelected
    }));
  }

  handleSubmit() {
      if(this.state.selected.text.length > 0) {
          this.onSubmitApp(this.state.selected);
      } 
  }

  render() {
    return (
      <div className="optionsContainer">
        <div className="optionsInstruc">
            Select an Option below and hit submit
        </div>
        <div className="optionsListContainer">
          <ul className="optionsList">
            {this.state.options.map(option => {
              return (
                <li
                  key={option.key}
                  className={'option' + (option.selected ? ' selected' : '')}
                  onClick={() => this.handleOptionClick(option.key)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="submitButtonContainer">
          <button className="submitButton" onClick={() => this.handleSubmit()}>Submit</button>
        </div>
      </div>
    );
  }
}

AppSelectionContainer.contextType = QlikContext;

export default AppSelectionContainer;
