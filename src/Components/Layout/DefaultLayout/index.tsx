import Header from '../Header'
import Footer from '../Footer'
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
