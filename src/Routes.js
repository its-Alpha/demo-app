import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Deals from './pages/Deals'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Deals" component={Deals}/>
                    <Route exact path="/Signin" component={Signin}/>
                    <Route exact path="/Signup" component={Signup}/>

                    
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
