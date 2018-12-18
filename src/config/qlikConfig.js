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

const TurnkeyLogInAppID = '7d689ddc-56fd-4192-91dc-7fb0a5393b11'; // turnkey app with new calcs
// const TurnkeyLogInAppID = '63e167a7-d502-4047-b7fc-796578b8fa69'; // turnkey app (old)

const loginConfig = { ...qdtConfig, appId: TurnkeyLogInAppID };
const qdtComponents = new QdtComponents(loginConfig, qdtConnections);
const QlikContext = React.createContext({
  qdtComponents,
  globals: QdtComponents.globals
});

export { qdtConfig, qdtConnections, TurnkeyLogInAppID, QlikContext };
