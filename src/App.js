import './App.css';
import React from'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './SignIn'
import Profile from './Profile'
import ChannelAnalytics from './ChannelAnalytics'
import WatchStatistics from './WatchStatistics'
import RecentActivity from './RecentActivity'
import Navbar from'./components/Navbar'
import TopBar from './components/TopBar'


class App extends React.Component{
  render(){
    return (
    <Router>
      <div className="App">
        <Navbar/>
        <TopBar />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/ChannelAnalytics" exact component={ChannelAnalytics} />
          <Route path="/WatchStatistics" exact component={WatchStatistics} />
          <Route path="/RecentActivity" exact component={RecentActivity} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
