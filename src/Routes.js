import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Deals from './pages/Deals'

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Deals" component={Deals}/>
                    
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
