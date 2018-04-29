import { connect } from 'react-redux'
import React, { Component } from 'react'

import Item from './item'

class App extends Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { items } = this.props
    return (
      <div className="main" style={{ overflow: 'scroll', height: '600px' }}>
        {
          items.map(item => {
            return <Item key={item.get('id')} id={item.get('id')} />
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { items: state.items }
}

export default connect(mapStateToProps)(App)