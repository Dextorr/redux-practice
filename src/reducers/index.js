import { ADD_REMINDER, REMOVE_REMINDER } from '../constants'

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random(),
  }
}

const remove = (reminders, idToRemove) => {
  return reminders.filter((reminder) => reminder.id !== idToRemove)
}

const reminderReducer = (state = [], action) => {
  let reminders = null
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]
      console.log('adding =============> ', reminders)
      return reminders
    case REMOVE_REMINDER:
      console.log('removing =============> ', action.id)
      return remove([...state], action.id)
    default:
      return state
  }
}

export default reminderReducer
