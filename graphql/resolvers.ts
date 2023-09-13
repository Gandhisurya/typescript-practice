import { Context } from "../pages/api/graphql";

export const resolvers = {
  Query: {
    user: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.findUnique({
        where: {
          id: args?.id,
        },
      });
    },
    users: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.findMany({});
    },
  },
  Mutations: {
    addUser: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.user.create({
        data: {
          userName: args?.userName,
          email: args?.email,
          password: args?.password,
          phoneNumber: args?.phoneNumber,
        },
      });
    },
  },
};
