import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import App from './app'
import { render } from 'react-dom'

const initial_state = {}
const initial_ids = []
const STORE_SIZE = 10000
for (let i = 0; i < STORE_SIZE; i++) {
  initial_state[i] = { id: i, marked: false }
  initial_ids.push(i)
}

function items(state = initial_state, action) {
  const item = state[action.id]
  switch (action.type) {
    case 'MARK':
      return {
        ...state,
        [action.id]: { ...item, marked: !item.marked }
      }
    default:
      return state
  }
}

function ids(state = initial_ids, action) {
  return state
}

function itemsReducer(state = {}, action) {
  return {
    ids: ids(state.ids, action),
    items: items(state.items, action),
  }
}

const store = createStore(itemsReducer)

class NaiveList extends Component {
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
