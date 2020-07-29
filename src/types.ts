import { CustomerProvider, LogProvider } from './datasources'

export interface Context {
    dataSources: {
      customerProvider: CustomerProvider
      logProvider: LogProvider;
    };
  }

  