const resolvers = {
  Query: {
    tracksForHome: (_, __, context, info) => {
      return context.dataSources.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: (parent, _, context, info) => {
      return context.dataSources.trackAPI.getAuthor(parent.authorId);
    },
  },
};

module.exports = resolvers;
