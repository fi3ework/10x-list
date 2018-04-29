import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import App from './App'
import { render } from 'react-dom'
import { List } from 'immutable'

let initial_state = []
const STORE_SIZE = 100
for (let i = 0; i < STORE_SIZE; i++) {
  initial_state.push({ id: i, marked: false })
}
initial_state = List(initial_state)

function items(state = initial_state, action) {
  const item = state.get(action.id)
  switch (action.type) {
    case 'MARK':
      return state.set(action.id, { id: item.id, marked: !item.marked })
    default:
      return state
  }
}

const store = createStore(combineReducers({ items: items }))

export default class NaiveList extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

render(<NaiveList />, document.getElementById('root'))
