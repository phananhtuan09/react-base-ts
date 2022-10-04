import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { ReactNode } from 'react'
import { Props } from '@/interfaces/childProps.interface'

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
