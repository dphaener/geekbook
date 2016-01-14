import React from 'react'
import { render } from 'react-dom'
import '~/app/assets/styles/app'

class App extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className='container'>
        Hello World
        { children }
      </div>
    )
  }
}

render(<App />, document.getElementById('react'))
