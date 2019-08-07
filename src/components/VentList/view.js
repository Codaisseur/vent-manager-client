import React from 'react'
import Vent from '../Vent'

export default function View (props) {
  const { vents } = props

  console.log(
    'List view vents test:',
    vents
  )

  const items = vents
    .map(vent => {
      console.log('vent test:', vent)
      return <Vent
        key={vent.id}
        vent={vent}
      />
    })

  return <div>{items}</div>
}
