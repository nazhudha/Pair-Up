import React from 'react'
import UserCards from './userCards'


const userData = {
  fname: "tom",
  lname: "Reynolds",
  skill: "Master",
  languages: ["ruby", "javascript"],
  username: "paddyr105",
  email: "paddy@test.com",
  password: "password",
  postcode: "se1 1ab"
}




export default function UserCardsContainer() {
  return (
    <div>
      <UserCards user={userData}/>
    </div>
  )
}
