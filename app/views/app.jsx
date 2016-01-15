import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Login from './login'
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
      <Route path="/login" component={Login} />
    </Route>
  </Router>
), document.getElementById('react'))
