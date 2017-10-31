const graphql = require('graphql');
const {
   GraphQLObjectType,
   GraphQLString,
   GraphQLID
 } = graphql;
 const mongoose = require('mongoose');
 const Behavior = mongoose.model('behavior');
 const UserType = require('./types/user_type');
 const BehaviorType = require('./types/behavior_type');
 const AuthService = require('../services/auth');

 const mutation = new GraphQLObjectType({
   name : "Mutation",
   fields: {
     signup: {
       type: UserType,
       args: {
         email: { type: GraphQLString },
         password: { type: GraphQLString }
       },
       resolve(parentValue, { email, password }, req){
         return AuthService.signup({ email, password, req});
       }
     },
     addBehavior: {
      type: BehaviorType,
      args: {
        name:  { type: GraphQLString },
        definition:  { type: GraphQLString },
        frequency:  { type: GraphQLString }
      },
      resolve(parentValue, { name, definition, frequency }) {
        return (new Behavior({ name, definition, frequency })).save()
      }
    },
    deleteBehavior: {
      type: BehaviorType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Behavior.remove({ _id: id });
      }
    },
     login: {
       type: UserType,
       args: {
         email: { type: GraphQLString },
         password: { type: GraphQLString }
       },
       resolve(parentValue, { email, password }, req){
         return AuthService.login({ email, password, req});
       }
     },
     logout: {
       type: UserType,
       resolve(parentValue, args, req){
         const { user } = req;
         req.logout();
         return user;
       }
     }
   }
 });

 module.exports = mutation;
