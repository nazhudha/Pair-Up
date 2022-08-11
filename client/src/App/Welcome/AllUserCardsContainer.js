import React from 'react'
import UserCards from './userCards'
import NewUserCard from './NewUserCard';




export default function UserCardsContainer({usersData}) {
  return usersData.slice(0,12).map((userData) => {
    //render a todo with props
    return (
      
      // <UserCards user={userData} key={userData.username}/>
      < NewUserCard user={userData} key={userData._id}/>
    );
  });

}

