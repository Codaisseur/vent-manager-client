import * as request from 'superagent'

export const ALL_VENTS = 'ALL_VENTS'

function allVents (payload) {
  return {
    type: ALL_VENTS,
    payload
  }
}

export function readVents () {
  return function (dispatch) {
    request
      .get('http://localhost:5000/vent')
      .then(response => {
        const action = allVents(response.body)
        dispatch(action)
      })
  }
}

export const CHANGE_VENT = 'CHANGE_VENT'

function changeVent (payload) {
  return {
    type: CHANGE_VENT,
    payload
  }
}

export function toggleVent (vent) {
  const { open, id } = vent
  const toggled = !open

  return function (dispatch) {
    request
      .put(`http://localhost:5000/vent/${id}`)
      .send({ open: toggled })
      .then(number => {
        const newVent = {
          ...vent,
          open: toggled
        }
        const action = changeVent(newVent)
        dispatch(action)
      })
  }
}
