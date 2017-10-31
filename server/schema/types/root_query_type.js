const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID } = graphql;
const UserType = require('./user_type');
const BehaviorType = require('./behavior_type');
const mongoose = require('mongoose');
//const Behavior = require('mongoose').model('behavior');


const Behavior = mongoose.model('behavior');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req){
        return req.user;
      }
    },
    behaviors: {
      type: new GraphQLList(BehaviorType),
      resolve() {
        return Behavior.find({});
      }
    },
    behavior: {
      type: BehaviorType,
      resolve(parnetValue, { id }) {
        return Behavior.findById(id);
      }
  }
}
});

module.exports = RootQueryType;
