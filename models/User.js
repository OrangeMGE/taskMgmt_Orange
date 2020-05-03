const {Schema, model, Types} = require('mongoose');

const shema = new Schema({
    "username" : {type: String, required: true, unique: true},
    "password" : {type: String, required: true},
    "links" : [{ type: Types.ObjectId, ref: 'Link' }]
})

module.exports = model( 'User', this.schema );