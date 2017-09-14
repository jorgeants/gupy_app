import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Starship from '../starship/starship'

export default props => (
    <Router history={hashHistory}>
        <Route path='/starships' component={Starship} />
        <Redirect from='*' to='/starships' />
    </Router>
)