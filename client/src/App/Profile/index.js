import React from 'react'
import ProfileHeader from './profileHeader'
import './profile.css'
import ProfileFeed from './LeftProfileFeed/ProfileFeed'
import RightSideBar from './RightSideBar/RightSideBar'

export default function Profile() {
  return (
    <div>
      <ProfileHeader/>
      <ProfileFeed/>
      <RightSideBar/>
    </div>
    
  )
}
