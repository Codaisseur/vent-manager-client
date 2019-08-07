import React from 'react'
import { connect } from 'react-redux'
import { readVents } from '../../actions'
import Vent from '../Vent'

class VentDetails extends React.Component {
  componentDidMount () {
    this.props.readVents()
  }

  render () {
    const { vents } = this.props

    console.log('vents test:', vents)

    const { id } = this
      .props
      .match
      .params

    const vent = vents
      .find(vent => vent.id === parseInt(id))

    return <Vent vent={vent} />
  }
}

function mapStateToProps (state) {
  return {
    vents: state
  }
}

const mapDispatchToProps = {
  readVents
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VentDetails)
