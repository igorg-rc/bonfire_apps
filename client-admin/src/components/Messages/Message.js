import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Message({ name, date }) {
  const [ message, setMessage ] = useState()
  const [ messages, setMessages ] = useState([])

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const result = await axios.get('/api/messages')
        const messages = await result.data
        console.log(messages)
        setMessages(messages)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMessages()
  }, [])

  return (
    <div>
      {messages.map(message => (
        <p>{message.senderName} - {message.createdAt}</p>
      ))}
    </div>
  )
}
