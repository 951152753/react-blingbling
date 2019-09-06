import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import DevTools from 'mobx-react-devtools'
import { Provider } from 'mobx-react'
import stores from 'stores'
import Home from '../home/index'
import Head from '../home/head'
import Aside from '../home/aside'
import About from 'components/about'
import Count from 'components/counter'

const Routes = () => (
    <HashRouter>
        <div>
            <Head />
            <Aside />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/counter" component={Count} />
            </Switch>
        </div>
    </HashRouter>
)

const App = () => (
    <Fragment>
        <Provider {...stores}>
            <Routes />
        </Provider>
        {
            process.env.NODE_ENV === 'development' ? (
                <DevTools />
            ) : null
        }
    </Fragment>
)

export default App
