import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { QlikContext } from '../config/qlikConfig';
import './segmentInfo.css';

class SegmentInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      styles: props.styles
    };
  }

  componentDidMount() {
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

  componentWillMount() {}

  render() {
    return (
      <div
        className="segment-info-component"
        aria-haspopup="false"
        aria-expanded="false"
        style={this.state.styles}
      >
        {this.state.text}
      </div>
    );
  }
}

SegmentInfoComponent.propTypes = {
  styles: PropTypes.object
};

SegmentInfoComponent.contextType = QlikContext;

export default SegmentInfoComponent;
