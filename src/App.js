import React from 'react';
import NavBar from './pages/NavBar';

import {
  Route, Switch,
} from 'react-router-dom';
import LandingScreen from './pages/LandingScreen';
import Templates from './pages/Templates';
import Suggestions from './pages/Suggestions';
import CaptainPick from './pages/CaptainPick';

function Content() {
  const contentStyle = {
    //paddingTop: props.styles.topBarHeight + 4,
    paddingRight: 2,
    //paddingBottom: props.styles.footerMenuHeight + 0,
    paddingLeft: 2,
    //backgroundImage: `url(${a6})`,
    minHeight: 'inherit'
  };

  return (
    <div style={contentStyle}>
      <Switch>
        <Route path="/templates" exact={true} component={Templates} />
        <Route path="/suggestions" exact={true} component={Suggestions} />
        <Route path="/captain" exact={true} component={CaptainPick} />
        {/* <Route path="/templates" exact={true} component={Templates} />  */}
        <Route path="/" exact={true} component={LandingScreen} />
      </Switch>
    </div>
  )
}

function AppComponent() {

  return (
    <div
      style={{
        // backgroundColor: `rgba(255, 255, 255, 0.05)`,
        minHeight: "88vh",
        position: "relative"
      }}
    >
      <NavBar />
      <Content />
      {/* <Footer /> */}
    </div>
  );
}

function App() {
  return (
    <div className="App"> <AppComponent /> </div>
  );
}

export default App;
