import React, { FC } from 'react'
const Login = React.lazy(() => import('@/Pages/Login'))
const Register = React.lazy(() => import('@/Pages/Register'))
const Home = React.lazy(() => import('@/Pages/Home'))
const Profile = React.lazy(() => import('@/Pages/Profile'))

const NullLayout = React.lazy(() => import('@/Components/Layout/NullLayout'))
import { RouteProps } from '@/interfaces/routeProps.interface'

export const publicRoutes: RouteProps[] = [
  { title: 'Home', path: '/', element: Home, private: true },

  {
    title: 'Login',
    path: '/login',
    element: Login,
    layout: NullLayout,
    private: false,
  },
  {
    title: 'Register',
    path: '/register',
    element: Register,
    layout: NullLayout,
    private: false,
  },
  {
    title: 'Profile',
    path: '/profile',
    element: Profile,
    private: true,
  },
]
