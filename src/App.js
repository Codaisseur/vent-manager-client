import React from 'react'
import { Route } from 'react-router-dom'
import VentList from './components/VentList'
import VentDetails from './components/VentDetails'

export default class App extends React.Component {
  render () {
    return <main>
      <Route
        path='/'
        exact
        component={VentList}
      />
      <Route
        path='/vent/:id'
        component={VentDetails}
      />
    </main>
  }
}
