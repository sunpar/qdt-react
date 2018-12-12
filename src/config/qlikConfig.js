import QdtComponents from 'qdt-components';
import React from 'react';

const qdtConfig = {
  host: 'dash.condenast.com',
  secure: true,
  port: 443,
  prefix: ''
};

const qdtConnections = {
  vizApi: true,
  engineApi: true
};

// const TurnkeyLogInAppID = 'b3f509c3-a568-4f99-a418-464be10f1183'; // turnkey app in dev
const TurnkeyLogInAppID = '63e167a7-d502-4047-b7fc-796578b8fa69'; // turnkey app in dev

const loginConfig = { ...qdtConfig, appId: TurnkeyLogInAppID };
const qdtComponents = new QdtComponents(loginConfig, qdtConnections);
const QlikContext = React.createContext({
  qdtComponents,
  globals: QdtComponents.globals
});

export { qdtConfig, qdtConnections, TurnkeyLogInAppID, QlikContext };
