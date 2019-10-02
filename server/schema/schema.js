const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull} = graphql;
const ElementDB = require('../models/element');

const ElementType = new GraphQLObjectType({
    name:'Element',
    fields:()=>({
        id:{type:GraphQLID},
        img:{type:GraphQLString},
        text:{type:GraphQLString},
        name:{type:GraphQLString},
        rate:{type:GraphQLInt},
        link:{type:GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        element:{
            type:ElementType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //return _.find(dummy,{id:args.id});
                return ElementDB.findById(args.id)
            }

        },

        elements:{
            type:GraphQLList(ElementType),
            resolve(parent,args){
               // return dummy;
               return ElementDB.find()
            }

        }
    }
});


const Muttion = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addElement:{
        type:ElementType,
        args:{
            img:{type:new GraphQLNonNull(GraphQLString)},
            text:{type:new GraphQLNonNull(GraphQLString)},
            name:{type:new GraphQLNonNull(GraphQLString)},
            rate:{type:new GraphQLNonNull(GraphQLInt)},
            link:{type:new GraphQLNonNull(GraphQLString)}
        },
        resolve(parent,args){
            let element = new ElementDB({
                img:args.img,
                text:args.text,
                name:args.name,
                rate:args.rate,
                link:args.link
            });
            return element.save();
        }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Muttion
})