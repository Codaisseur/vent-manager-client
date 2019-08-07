import React from 'react'
import { connect } from 'react-redux'
import { readVents } from '../../actions'
import View from './view'

class VentList extends React.Component {
  componentDidMount () {
    this.props.readVents()
  }

  render () {
    return <View
      vents={this.props.vents}
    />
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
)(VentList)
