import QdtComponents from 'qdt-components';
import React from 'react';

const qdtConfig = {
  host: 'dashdev.condenast.com',
  secure: true,
  port: 443,
  prefix: 'build'
};

const qdtConnections = {
  vizApi: true,
  engineApi: true
};

const TurnkeyLogInAppID = 'b3f509c3-a568-4f99-a418-464be10f1183'; // turnkey app in dev

const loginConfig = { ...qdtConfig, appId: TurnkeyLogInAppID };
const qdtComponents = new QdtComponents(loginConfig, qdtConnections);
const QlikContext = React.createContext({
  qdtComponents,
  globals: QdtComponents.globals
});

export { qdtConfig, qdtConnections, TurnkeyLogInAppID, QlikContext };
