import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { ReactNode } from 'react'

import Content from '../components/Content'

interface Props {
  children?: ReactNode
  // any props that come into the component
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
