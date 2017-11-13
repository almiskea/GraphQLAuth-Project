const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID } = graphql;
const UserType = require('./user_type');
const BehaviorType = require('./behavior_type');
const mongoose = require('mongoose');
const _ = require('lodash');
//const Behavior = require('mongoose').model('behavior');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = mongoose.model('user');

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
      resolve(parnetValue, { id }, req) {
        return req.user.behaviors;
      }
    },
    behavior: {
      type: BehaviorType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id },req) {
        return User.findById(req.user.id).then(user => {
          return user.behaviors.id(id);
        });
      }
    }
}
});


module.exports = RootQueryType;
