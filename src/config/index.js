import axios from 'axios'


const env = {  
  apiEndpoint: 'http://localhost:4000'
}

export const axiosClient = axios.create({
  baseURL: env.apiEndpoint
})


export const config = {
  ...env
}