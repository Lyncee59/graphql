import { MongoDataSource } from 'apollo-datasource-mongodb'
import { Log } from '../generated/graphql'

class LogProvider extends MongoDataSource<Log> {
  async getLogs(): Promise<Log[]> {
    return this.collection.find().limit(100).toArray();
  }

  async searchLogs(search: string, limit: number, skip: number): Promise<Log[]> {
    return this.collection.find({ CustomerId: { $exists:true, $ne:null }, Message: new RegExp(search, 'i') }).skip(skip).limit(limit).toArray();
  }
}

export default LogProvider