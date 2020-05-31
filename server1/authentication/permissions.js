const createResolver = (resolver) => {
  const baseResolver = resolver;
  baseResolver.createResolver = (childResolver) => {
    const newResolver = async (parent, args, context, info) => {
      await resolver(parent, args, context, info);
      return childResolver(parent, args, context, info);
    };
    return createResolver(newResolver);
  };
  return baseResolver;
};

const requiresAuth = createResolver((parent, args, { user }) => {
  console.log('user', user);
  if (!user || !user.id) {
    throw new Error('Not authenticated');
  }
});

exports.requiresAuth = requiresAuth;
