import React from 'react'

import { addFriend } from '../App/Functions/addFriend'

// this takes a friend OBJECT and myId as a STRING!!!


export default function AddFriendButton({friend, myId}) {

  const handleClick = () => {
    console.log({friend})
    console.log({myId})
    addFriend(friend, myId)
  }

  return (
    <button onClick={() => {handleClick()}}>
      Add Friend
      </button>
  )
}
