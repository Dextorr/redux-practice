import React, { useState } from 'react'
import { addReminder, removeReminder } from '../actions/index'
import { connect } from 'react-redux'

const App = (props) => {
  const [text, setText] = useState('')
  const { reminders, addReminder, removeReminder } = props

  function handleSubmit(e) {
    e.preventDefault()
    addReminder(text)
    setText('')
  }

  function handleClick(reminder) {
    removeReminder(reminder)
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Remind me to..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add Reminder</button>
      </form>
      <ul>
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            style={{
              display: 'flex',
            }}
          >
            <li style={{ marginRight: '5px' }}>{reminder.text}</li>
            <div
              onClick={() => handleClick(reminder.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              ⓧ
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('state =============> ', state)
  return {
    reminders: state,
  }
}

export default connect(mapStateToProps, { addReminder, removeReminder })(App)
