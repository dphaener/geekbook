// Vendor Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Components
import Home from './home/home'
import Feed from './feed/feed'

// Styles
import '~/app/assets/styles/app'

// Reducer
import reducer from '~/app/reducers'

const store = createStore(reducer)

class App extends React.Component {
  render() {
    const { children, history } = this.props

    return (
      <Provider store={store}>
        <div className='container'>
          { React.Children.map(children, child => (
              React.cloneElement(child, { history })
            ))
          }
        </div>
      </Provider>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/:token" component={Feed} />
    </Route>
  </Router>
), document.getElementById('react'))
