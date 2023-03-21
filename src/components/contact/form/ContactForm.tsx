import { useState } from 'react'
import emailjs from '@emailjs/browser'

import './contactForm.css'

export function ContactForm() {

  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const templateParams = {
      from_name: enteredName,
      message: enteredMessage,
      email: enteredEmail
    }

    emailjs.send("service_alg1r7d", "template_x31cfeh", templateParams, "OVw7RKM4JlVU4P2fn")
      .then((response) => {
        console.log("submitted", response.status, response.text)
        setEnteredName('')
        setEnteredEmail('')
        setEnteredMessage('')
      }, (err) => {
        console.log("error: ", err)
      })
  }

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className="form__input">
        <input
          type="text"
          placeholder="Your Name"
          value={enteredName}
          onChange={e => setEnteredName(e.target.value)}
          required
        />
      </div>
      <div className="form__input">
        <input
          type="email"
          placeholder="Your Email"
          value={enteredEmail}
          onChange={e => setEnteredEmail(e.target.value)}
          required
        />
      </div>
      <div className="form__input">
        <textarea
          placeholder="Write Message"
          value={enteredMessage}
          onChange={e => setEnteredMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button className="submit__btn" type="submit">
        Submit
      </button>
    </form>
  )
}