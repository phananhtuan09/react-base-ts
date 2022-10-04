import React from 'react'
import './Profile.scss'
const userInfo = JSON.parse(localStorage.getItem('userInfo') || '')

function Profile() {
  return (
    <>
      <ul className="profile-info">
        <li>firstName: {userInfo.firstName}</li>
        <li>lastName: {userInfo.lastName}</li>
        <li>username: {userInfo.username}</li>
        <li>email: {userInfo.email}</li>
        <li>avatar: {userInfo.avatar}</li>
        <li>gender: {userInfo.gender}</li>
        <li>phone: {userInfo.phone}</li>
        <li>birthday: {userInfo.birthday}</li>
        <li>status: {userInfo.status}</li>
        <li>createdAt: {userInfo.createdAt}</li>
        <li>modifiedAt: {userInfo.modifiedAt}</li>
      </ul>
    </>
  )
}

export default Profile
