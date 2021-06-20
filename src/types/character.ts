type CharacterOrigin = {
  name: string,
  url: string,
}

type CharatcerLocation = {
  name: string,
  url: string,
}

type CharacterInterface = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string, 
    gender: string,
    origin: CharacterOrigin,
    location: CharatcerLocation,
    image: string,
    episode: [string],
    url: string
    created: string,
}

export class Character {
  id: number
  name: string
  status: string
  species: string
  type: string 
  gender: string
  origin: CharacterOrigin
  location: CharatcerLocation
  image: string
  episode: [string]
  url: string
  created: string
  
  constructor({
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    url,
    created,
  }: CharacterInterface) {
    this.id = id
    this.name = name
    this.status = status
    this.species = species
    this.type = type
    this.gender = gender
    this.origin = origin
    this.location = location
    this.image = image
    this.episode = episode
    this.url = url
    this.created = created
  }
}