import React from 'react'
import { connect } from 'react-redux'
import { toggleVent } from '../../actions'
import View from './view'

class Vent extends React.Component {
  render () {
    const {
      vent,
      toggleVent
    } = this.props

    console.log(
      'Vent index this.props:',
      this.props
    )

    return <View
      {...vent}
      toggleVent={toggleVent}
    />
  }
}

const mapDispatchToProps = {
  toggleVent
}

export default connect(
  null,
  mapDispatchToProps
)(Vent)
