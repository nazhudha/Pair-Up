import React from 'react'
import UserCards from './userCards'





export default function UserCardsContainer({usersData}) {
  return usersData.map((userData) => {
    //render a todo with props
    return (
      
      <UserCards user={userData} key={userData.username}/>

    );
  });

}
