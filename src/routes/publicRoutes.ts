import React, { FC } from 'react'
const Login = React.lazy(() => import('@/Pages/Login'))
const Home = React.lazy(() => import('@/Pages/Home'))
const Profile = React.lazy(() => import('@/Pages/Profile'))
interface configRoute {
  title: string
  path: string
  element: FC
  layout?: null | FC
}
export const publicRoutes: configRoute[] = [
  { title: 'Home', path: '/', element: Home },
  {
    title: 'Login',
    path: '/login',
    element: Login,
    layout: null,
  },
  {
    title: 'Profile',
    path: '/profile',
    element: Profile,
  },
]
