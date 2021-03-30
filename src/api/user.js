import axios from '@/libs/api.request'

export const login = ({ username, password }) => {
  return axios.request({
    url: 'user/login/',
    data: {username:username,password:password},
    method: 'post'
  })
}


export const register = ({ username, password,email,phone }) => {
  return axios.request({
    url: 'user/register/',
    data: {username:username,password:password,email:email,phone:phone},
    method: 'post'
  })
}