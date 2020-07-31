import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};


export type Customer = {
  __typename?: 'Customer';
  CustomerId: Scalars['Int'];
  CustomerGuid: Scalars['String'];
  LocatorId: Scalars['String'];
};

export type Log = {
  __typename?: 'Log';
  _id: Scalars['ID'];
  Version?: Maybe<Scalars['Int']>;
  SchemaVersion?: Maybe<Scalars['Int']>;
  CreatedAt?: Maybe<Scalars['DateTime']>;
  Type?: Maybe<Scalars['Int']>;
  Message?: Maybe<Scalars['String']>;
  MachineName?: Maybe<Scalars['String']>;
  Source?: Maybe<Scalars['String']>;
  Exception?: Maybe<Scalars['String']>;
  StackTrace?: Maybe<Scalars['String']>;
  CustomerId?: Maybe<Scalars['Int']>;
  Customer?: Maybe<Customer>;
  TimeGenerated?: Maybe<Scalars['DateTime']>;
  LogDetails?: Maybe<Scalars['String']>;
  LogCategory?: Maybe<Scalars['String']>;
  UserName?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  logs: Array<Log>;
  searchLogs: Array<Log>;
};


export type QuerySearchLogsArgs = {
  search: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Customer: ResolverTypeWrapper<Customer>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Log: ResolverTypeWrapper<Log>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime'];
  Customer: Customer;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Log: Log;
  ID: Scalars['ID'];
  Query: {};
  Boolean: Scalars['Boolean'];
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  CustomerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  CustomerGuid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  LocatorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LogResolvers<ContextType = any, ParentType extends ResolversParentTypes['Log'] = ResolversParentTypes['Log']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  Version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  SchemaVersion?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  CreatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  Type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  MachineName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Exception?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  StackTrace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  CustomerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  Customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  TimeGenerated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  LogDetails?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  LogCategory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  UserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  logs?: Resolver<Array<ResolversTypes['Log']>, ParentType, ContextType>;
  searchLogs?: Resolver<Array<ResolversTypes['Log']>, ParentType, ContextType, RequireFields<QuerySearchLogsArgs, 'search'>>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Customer?: CustomerResolvers<ContextType>;
  Log?: LogResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
