import { IResolvers } from 'graphql-tools'

import { getCharacterByName } from './services'

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`
    },
    async charactersByName(_: void, { name }: { name: string }) {
      let charactersList

      await getCharacterByName(name).then(resp => charactersList = resp.results)

      return charactersList
    }
  }
}

export default resolverMap