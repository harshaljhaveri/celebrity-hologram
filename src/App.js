import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import HologramInfo from './components/holograms/HologramInfo'
import SignIn from './components/auth/SignIn'
import Register from './components/auth/Register'
import AddHolograms from './components/holograms/AddHolograms';
import Holograms from './components/holograms/Holograms';
// import Hologram from './components/holograms/Hologram';
import Search from './components/holograms/Search';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Dashboard />
          <Switch>
            <Route exact path='/' component={Holograms} />
            <Route path='/hologram/:id' component={HologramInfo} />
            <Route path='/signin' component={SignIn} />
            <Route path='/register' component={Register} />
            <Route path='/addHolograms' component={AddHolograms} />
            <Route path='/all' component={Holograms} />
            <Route path='/search' component={Search} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
