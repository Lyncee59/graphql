import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import { format } from "date-fns";

const parseValue = (value: any) => {
  return new Date(value); // value from the client
};

const serialize = (value: any) => {
  // https://date-fns.org/v2.15.0/docs/format
  return format(value, "P p"); // value sent to the client
};

const parseLiteral = (ast: any) => {
  if (ast.kind === Kind.INT) {
    return new Date(+ast.value); // ast value is always in string format
  }
  return null;
};

export const DateTime = new GraphQLScalarType({
  name: "DateTime",
  description: "An ISO-8601 encoded UTC date string.",
  serialize,
  parseValue,
  parseLiteral,
});
