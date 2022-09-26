import Header from '../Header'
import Footer from '../Footer'
import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  // any props that come into the component
}
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
