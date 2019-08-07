import {
  ALL_VENTS,
  CHANGE_VENT
} from './actions'

export default function reducer (
  state = [],
  action = {}
) {
  switch (action.type) {
    case ALL_VENTS:
      return action.payload
    case CHANGE_VENT:
      return state
        .map(vent => vent.id === action.payload.id
          ? action.payload
          : vent
        )
    default:
      return state
  }
}
