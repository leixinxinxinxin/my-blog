const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    log: { type: String },
    cause: { type: String },
    solution: { type: String },
})
module.exports = mongoose.model('Mistake', schema)