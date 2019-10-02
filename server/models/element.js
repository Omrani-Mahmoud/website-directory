const mongoose = require('mongoose');
const schema = mongoose.Schema;


const ElementSchema = new schema({
        img:String,
        text:String,
        name:String,
        rate:Number,
        link:String
});


module.exports = mongoose.model('Element',ElementSchema);
