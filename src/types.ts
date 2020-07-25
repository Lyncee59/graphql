import { LogsProvider } from './datasources'

// This is where we define the context type which is used
// to have correct typing when using context in the resolvers.
export interface Context {
    dataSources: {
      logsProvider: LogsProvider;
    };
  }
  
  