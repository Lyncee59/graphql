import { IResolvers } from "./generated/graphql";
import { Log, QuerySearchLogsArgs } from "../src/generated/graphql";
import { Context } from "../src/types";
import { DateTime } from "./scalars/DateTime";

export const resolvers: IResolvers = {
  Query: {
    logs: async (_: {}, __: any, ctx: Context) => {
      return await ctx.dataSources.logProvider.getLogs();
    },
    searchLogs: async (_: {}, args: QuerySearchLogsArgs, ctx: Context) => {
      const limit = args.limit || 50;
      const skip = args.skip || 0;
      return await ctx.dataSources.logProvider.searchLogs(
        args.search,
        limit,
        skip
      );
    },
  },
  Log: {
    Customer: async (_: Log, __: any, ctx: Context) => {
      console.log(_.CustomerId);
      if (_.CustomerId == null) {
        return null;
      }
      return await ctx.dataSources.customerProvider.getCustomerPerId(
        _.CustomerId
      );
    },
  },
  DateTime: DateTime,
};
