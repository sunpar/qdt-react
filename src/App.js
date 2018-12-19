import React, { Component } from 'react';
import './App.css';
import SideBarContainer from './Containers/sidebar-container/sidebarContainer';
import TopBarContainer from './Containers/topbar-container/topbarContainer';
import MainContentContainer from './Containers/main-content-container/mainContentContainer';
import AppSelectionContainer from './Containers/app-selection-container/appSelectionContainer';
import { QlikContext, TurnkeyCalcID, sessionAppConfig } from './config/qlikConfig';
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
    const {qlik, engine} = globals;
    console.log(qlik, engine);
    const app = qlik.sessionAppFromApp(TurnkeyCalcID, sessionAppConfig);
    // const app = engine.createSessionAppFromApp(TurnkeyCalcID).then(app => console.log(app));
    app.variable
      .setStringValue(
        'v.global.input.segmentName',
        "'" + appSelected.variable + "'"
      )
      .then(reply => {
        console.time('AppReload');
        return app.doReload();
      })
      .then(reply => {
        console.timeEnd('AppReload');
        app.getAppLayout(layout => console.log(layout));
      });

    this.setState(state => ({
      ...state,
      appSelected: true,
      cApp: app,
    }));
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
