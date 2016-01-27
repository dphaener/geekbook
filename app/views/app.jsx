// Vendor Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Components
import Home from './home/home'

// Styles
import '~/app/assets/styles/app'

// Reducer
import reducer from '~/app/reducers'

const store = createStore(reducer)

class App extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Provider store={store}>
        <div className='container'>
          { children }
        </div>
      </Provider>
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
