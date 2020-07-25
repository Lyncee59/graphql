import { MongoDataSource } from 'apollo-datasource-mongodb'
import { Log } from '../generated/graphql'

 class LogsProvider extends MongoDataSource<Log> {
  getLogs() {
    return this
  }
}

export default LogsProvider