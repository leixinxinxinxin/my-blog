const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title:{type:String},
    body:{type:String},
},{
    timestamps:true
})
module.exports = mongoose.model('Javascript',schema)
