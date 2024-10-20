import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Loginscreen from './views/loginscreen'
import ProjectProposalscreen from './views/project-proposalscreen'
import Landingprojects from './views/landingprojects'
import Projects from './views/projects'
import LandingHomescreen from './views/landing-homescreen'
import Proposalsubmitted from './views/proposalsubmitted'
import LandingHomescreenprposalsreceived from './views/landing-homescreenprposalsreceived'
import Welcomescreen from './views/welcomescreen'
import ProjectProposalscreenfilled from './views/project-proposalscreenfilled'
import LandingHomescreen1 from './views/landing-homescreen1'
import Loginscreen1 from './views/loginscreen1'
import Loginscreen2 from './views/loginscreen2'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Loginscreen} exact path="/" />
        <Route
          component={ProjectProposalscreen}
          exact
          path="/project-proposalscreen"
        />
        <Route component={Landingprojects} exact path="/landingprojects" />
        <Route component={Projects} exact path="/projects" />
        <Route component={LandingHomescreen} exact path="/landing-homescreen" />
        <Route component={Proposalsubmitted} exact path="/proposalsubmitted" />
        <Route
          component={LandingHomescreenprposalsreceived}
          exact
          path="/landing-homescreenprposalsreceived"
        />
        <Route component={Welcomescreen} exact path="/welcomescreen" />
        <Route
          component={ProjectProposalscreenfilled}
          exact
          path="/project-proposalscreenfilled"
        />
        <Route
          component={LandingHomescreen1}
          exact
          path="/landing-homescreen1"
        />
        <Route component={Loginscreen1} exact path="/loginscreen1" />
        <Route component={Loginscreen2} exact path="/loginscreen2" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
