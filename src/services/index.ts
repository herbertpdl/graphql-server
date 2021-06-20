import axios from 'axios'

const baseUrl = 'https://rickandmortyapi.com/api'

export const getCharacterByName = () => axios.get(`${baseUrl}/character/?name=rick`).then(resp => resp.data)