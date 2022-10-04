import { useEffect } from 'react'
import useTimeout from './useTimeOut'

export default function useDebounce(
  callback: Function,
  delay: number,
  dependencies: any
) {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}
