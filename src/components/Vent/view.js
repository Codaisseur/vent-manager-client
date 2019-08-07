import React from 'react'
import { Link } from 'react-router-dom'

export default function Vent (props) {
  const {
    id,
    location,
    open,
    toggleVent
  } = props

  console.log(
    'Vent view props:',
    props
  )

  const statuses = [
    {
      adjective: 'Open',
      verb: 'Open'
    },
    {
      adjective: 'Closed',
      verb: 'Close'
    }
  ]

  const status = open
    ? statuses
    : statuses.reverse()

  const [current, alternate] = status

  const path = `/vent/${id}`
  console.log('path', path)

  return <div>
    <Link to={path}>
      <h3>{location}</h3>
    </Link>
    <p>
      Status: {current.adjective}
    </p>
    <button
      onClick={() => toggleVent(props)}
    >
      {alternate.verb}
    </button>
  </div>
}
