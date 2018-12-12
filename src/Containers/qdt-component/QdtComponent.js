import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QdtComponents from 'qdt-components';
import { QlikContext } from '../../config/qlikConfig';

class QdtComponent extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired
  };
  componentDidMount() {
    const { type, props } = this.props;
    let qdtComponents = this.context.qdtComponents;
    qdtComponents.render(type, props, this.node);
  }

  componentWillUnmount() {
    QdtComponents.unmountQdtComponent(this.node);
  }

  render() {
    return (
      <div
        ref={node => {
          this.node = node;
        }}
      />
    );
  }
}

QdtComponent.contextType = QlikContext;
export default QdtComponent;
