import React from 'react'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import LazyLoading from 'common/components/LazyLoading'

import styles from '../style/index.css'

// This is show case how you can lazy loading component
const ExampleRouteHandler = LazyLoading(() => import('views/example'))
const IdeaCreatorRouteHandler = LazyLoading(() => import('views/IdeaCreator'))
const Header = LazyLoading(() => import('common/components/Header/Header'))

// This show case how you can access routing info in your component
const HeaderWithRouter = withRouter((props) => <Header {...props} />)

module.exports = (
  <div className="container">
    <HeaderWithRouter />
    <hr />
    <div className="py-5">
      <Switch>
        <Route exact path="/" component={ExampleRouteHandler} />
        <Route path="/new-idea" component={IdeaCreatorRouteHandler} />
        <Route path="*" component={ExampleRouteHandler} />
      </Switch>
    </div>
  </div>
)
