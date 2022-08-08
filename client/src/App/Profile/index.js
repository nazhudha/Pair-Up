import React from 'react'
import ProfileHeader from './profileHeader'
import './profile.css'
import ProfileFeed from './LeftProfileFeed/LeftProfileFeed'
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
