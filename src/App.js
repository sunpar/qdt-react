import React, { Component } from 'react';
import './App.css';
import SideBarContainer from './Containers/sidebar-container/sidebarContainer';
import TopBarContainer from './Containers/topbar-container/topbarContainer';
import MainContentContainer from './Containers/main-content-container/mainContentContainer';
import AppSelectionContainer from './Containers/app-selection-container/appSelectionContainer';
import {
  QlikContext,
  TurnkeyCalcID,
  qDoc,
  config,
  qApp
} from './config/qlikConfig';
import globals from './Util/qlikGlobals';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appSelected: false,
      cApp: null,
      eApp: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(appSelected) {
    const newConfig = {
      host: 'swcnpaws219.advancemags.com',
      isSecure: true,
      port: 443,
      prefix: 'cp',
      identity: config.identity
    };
    let engine = qDoc(newConfig, false);
    let cApp;
    const session = engine.then(session => session.globalPromise);
    const eApp = session.then(session =>
      session.createSessionAppFromApp('59b08097-1b55-4227-b4cd-c306f414ab09')
    );

    eApp
      .then(app => {
        cApp = qApp({ ...newConfig, appId: app.id });
        cApp.then(app => {
          app.variable.setStringValue(
            'v.global.input.segmentName',
            "'" + appSelected.variable + "'"
          );
        });
        console.log(cApp);
        console.log(app);
        return cApp;
      })
      .then(() => {
        console.time('AppReload');
        return cApp.doReload();
      })
      .then(() => {
        console.timeEnd('AppReload');
        cApp.getAppLayout(layout => console.log(layout));
      });

    // engine.then(session => session.open()).then(global => global.openDoc('59b08097-1b55-4227-b4cd-c306f414ab09'));
    // const app = qlik.sessionAppFromApp(TurnkeyCalcID, sessionAppConfig);
    // const app = engine.then(global => global.openDoc('522514d3-eedd-4c97-8d92-20e8209258dc'));
    // .createSessionAppFromApp(TurnkeyCalcID)
    // .then(app => console.log(app));
    // app.variable
    //   .setStringValue(
    //     'v.global.input.segmentName',
    //     "'" + appSelected.variable + "'"
    //   )
    //   .then(reply => {
    //     console.time('AppReload');
    //     return app.doReload();
    //   })
    //   .then(reply => {
    //     console.timeEnd('AppReload');
    //     app.getAppLayout(layout => console.log(layout));
    //   });

    // this.setState(state => ({
    //   ...state,
    //   appSelected: true,
    //   cApp: app,
    // }));
  }

  render() {
    if (this.state.appSelected) {
      return null; //(
      //   <QlikContext.Provider value={}
      //   <div className="grid-container">
      //     <div className="sidebar">
      //       <SideBarContainer />
      //     </div>
      //     <div className="main-content">
      //       <TopBarContainer />
      //       <div className="app-content">
      //         <MainContentContainer />
      //       </div>
      //     </div>
      //   </div>
      // );
    } else {
      return <AppSelectionContainer onSubmitApp={this.handleSubmit} />;
    }
  }
}

App.contextType = QlikContext;

export default App;
