const graphql = require('graphql');
const {
   GraphQLObjectType,
   GraphQLString,
   GraphQLID
 } = graphql;

const BehaviorType = new GraphQLObjectType({
  name: 'BehaviorType',
  fields: {
    id: { type: GraphQLID },
    name:  { type: GraphQLString },
    definition:  { type: GraphQLString },
    frequency:  { type: GraphQLString }
  }
});

module.exports = BehaviorType;
