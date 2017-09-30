import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware ,compose} from 'redux';
import { BrowserRouter, Route , Switch, Redirect } from 'react-router-dom';
import promise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import reducers from './reducers';
import DesktopAdminParent from './adminApp/desktopAdminParent';
import MobileAdminParent from './adminApp/mobileAdminParent';
import injectTapEventPlugin from 'react-tap-event-plugin'
import reduxThunk from 'redux-thunk';



import CreateCampaignParent from "./adminApp/createCampaignApp/createCampaignParent"




var deviceDetect = require('device-detect')();




injectTapEventPlugin();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(reduxThunk, promise)
  ));

class Dupa extends React.Component{
  render(){
    return(
      <div>HELLOOOOOO</div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={
              deviceDetect.device == "Windows" ||
              deviceDetect.device == "Macintosh" ||
              deviceDetect.device == "Linux" ? MobileAdminParent : MobileAdminParent /*MobileAdminParent*/} />
            <Route path='/hue' component={Dupa} />
            <Route path="/create-campaign" component={CreateCampaignParent} />
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
