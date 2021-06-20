import axios from 'axios'

const baseUrl = 'https://rickandmortyapi.com/api'

export const getCharacterByName = (name: string) => axios.get(`${baseUrl}/character/?name=${name}`).then(resp => resp.data)