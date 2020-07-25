import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import'
import { MongoClient } from 'mongodb'
import { LogsProvider } from './datasources';
import { resolvers } from './resolver';
import { Context } from './types'

const client = new MongoClient('')
client.connect()

// This is where we define the dataSources which can be
// used to retrieve data from the resolvers.
const dataSources = (): Context['dataSources'] => ({
  logsProvider: new LogsProvider(client.db().collection('logs'))
})


const server = new ApolloServer({
  typeDefs: importSchema('./src/schema/schema.graphql'),
  // @ts-ignore
  resolvers,
  dataSources
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // tslint:disable-line no-console
});