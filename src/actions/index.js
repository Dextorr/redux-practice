import { ADD_REMINDER, REMOVE_REMINDER } from '../constants'

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text,
  }
  console.log('action =============> ', action)
  return action
}

export const removeReminder = (id) => {
  const action = {
    type: REMOVE_REMINDER,
    id,
  }
  console.log('action =============> ', action)
  return action
}
