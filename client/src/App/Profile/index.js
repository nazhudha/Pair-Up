import React from 'react'
import ProfileHeader from './profileHeader'
import './profile.css'
import LeftProfileFeed from './LeftProfileFeed/LeftProfileFeed'
import RightSideBar from './RightSideBar/RightSideBar'

export default function Profile() {
  return (
    <div>
      <ProfileHeader/>
      <div className='main-feed-container'>
      <LeftProfileFeed/>
      <RightSideBar/>
      </div>
    </div>
    
  )
}
