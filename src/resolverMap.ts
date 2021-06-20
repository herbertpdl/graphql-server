import { IResolvers } from 'graphql-tools'

import { getCharacterByName } from './services'

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`
    },
    async characters() {
      let charactersList

      await getCharacterByName().then(resp => charactersList = resp.results)

      return charactersList
    }
  }
}

export default resolverMap