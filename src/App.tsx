import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes } from '@/routes/publicRoutes'
import React, { Fragment, Suspense, useEffect, useState } from 'react'

import * as testApi from '@/apiServices/testApi'
const DefaultLayout = React.lazy(
  () => import('@/Components/Layout/DefaultLayout')
)
const NotFoundPage = React.lazy(() => import('@/Pages/NotFound'))

interface MyInFo {
  name: string
  job: string
}

function App() {
  const [myInfo, setMyInfo] = useState<MyInFo>({
    name: 'morpheus',
    job: 'zion resident',
  })

  useEffect(() => {
    handleEditUser()
  }, [])

  const handleEditUser = async () => {
    const uuid = 2
    const result = await testApi.editUsers(uuid, myInfo)
    console.log('result', result)
  }

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route) => {
          let LayoutCustom!: React.ElementType
          if (route.layout) {
            LayoutCustom = route.layout
          }
          return (
            <Route
              path={route.path}
              element={
                <Suspense fallback={<>...</>}>
                  {route.layout ? (
                    <LayoutCustom>
                      <route.element />
                    </LayoutCustom>
                  ) : (
                    <DefaultLayout>
                      <route.element />
                    </DefaultLayout>
                  )}
                </Suspense>
              }
              key={route.path}
            />
          )
        })}
        <Route
          path="*"
          element={
            <Suspense fallback={<>...</>}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
