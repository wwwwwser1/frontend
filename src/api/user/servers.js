import axios from 'axios'

export const getServerList = () => {
  return axios.request({
    url: '/',
    method: 'get'
  })
}

export const delServer = (server_id) => {
  console.log(server_id)
  return axios.request({
    url: 'cmdb/servers/'+server_id+'/',
    method: 'delete'
  })
}