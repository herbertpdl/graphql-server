const axios = require('axios')

const baseUrl = 'https://rickandmortyapi.com/api'

export const getCharacterByName = () => axios.get(`${baseUrl}/character/?name=ricky`)