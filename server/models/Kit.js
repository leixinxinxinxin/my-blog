const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{type:String},
    effect:{type:String},
    use:{type:String},
})
module.exports = mongoose.model('Kit',schema)
