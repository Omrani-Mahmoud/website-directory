const express = require('express');
const graphqlHTTP= require('express-graphql');
const Schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app =express();
app.use(cors());
mongoose.connect('mongodb+srv://root:root@cluster0-yrpzx.mongodb.net/dicso?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log('hello DB');
})
app.use('/graphql',graphqlHTTP({
    schema: Schema,
    graphiql:true,
}));

app.listen(4004,()=>{

    console.log("listen to port 4000");
});
