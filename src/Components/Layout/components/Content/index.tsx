import React from 'react'
import './Content.scss'
import LeftBar from '../LeftBar'
import MainPage from '../MainPage'

export default function Content() {
  return (
    <div className="content">
      <LeftBar />
      <MainPage />
    </div>
  )
}
