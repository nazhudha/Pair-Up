import React from 'react'
import UserCards from './userCards'
import NewUserCard from './NewUserCard';




export default function UserCardsContainer({usersData}) {
  let i = 0
  return usersData.map((userData) => {
    //render a todo with props
    while (i <= 3) {
    return (
      
      // <UserCards user={userData} key={userData.username}/>
      < NewUserCard user={userData} key={userData.username}/>
    );
    }
    i++
    console.log(i)
  });

}

