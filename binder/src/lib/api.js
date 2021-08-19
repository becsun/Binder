import axios from 'axios'

const baseUrl = 'http://localhost:4000'

export const getAllPets= () => {
    return axios.get(`${baseUrl}/pets`)
  } 