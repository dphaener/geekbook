// Vendor Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

// Components
import Home from './home/home'

// Styles
import '~/app/assets/styles/app'

class App extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className='container'>
        { children }
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('react'))
