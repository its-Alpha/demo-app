import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Deals from './pages/Deals'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Customer from './pages/Customer'
import Gift from './pages/Gift'
import Regi from './pages/Regi'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Deal" component={Deals}/>
                    <Route exact path="/Signin" component={Signin}/>
                    <Route exact path="/Signup" component={Signup}/>
                    <Route exact path="/Custom" component={Customer}/>
                    <Route exact path="/Giftscard" component={Gift}/>
                    <Route exact path="/Register" component={Regi}/>
                   
                    
                    

                    
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
