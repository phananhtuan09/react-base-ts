import { ApiClient } from '@/apiServices/apiClient'

export const getUsers = async (id: number | string) => {
  const res = await ApiClient.get(`/users/${id}`)
  if (Object.prototype.hasOwnProperty.call(res, 'data')) {
    return res.data
  } else {
    return res
  }
}
export const addUsers = async (addValue: object | string) => {
  const res = await ApiClient.post('/users', {}, addValue)
  if (Object.prototype.hasOwnProperty.call(res, 'data')) {
    return res.data
  } else {
    return res
  }
}
export const editUsers = async (
  id: number | string,
  editValue: string | object
) => {
  const res = await ApiClient.put(`/users/${id}`, {}, editValue)
  if (Object.prototype.hasOwnProperty.call(res, 'data')) {
    return res.data
  } else {
    return res
  }
}
export const deleteUsers = async (id: number | string) => {
  const res = await ApiClient.delete(`/users/${id}`)
  if (Object.prototype.hasOwnProperty.call(res, 'data')) {
    if (res.status == 204) {
      return 'success'
    } else {
      return 'fail'
    }
  } else {
    return res
  }
}
