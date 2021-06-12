import React  from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Tickets from '../templates/Tickets/Tickets'


export default props => (
    <BrowserRouter>
        <Switch>
            <Route path="/tickets" component={Tickets} />
            <Redirect from="*" to="/tickets"/>

        </Switch>
    </BrowserRouter>
)