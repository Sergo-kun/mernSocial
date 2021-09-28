const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    nickname: {type: String, required: true, unique: true},
    birthday: {type: Date, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    info: {type: Types.ObjectId, ref: "Info"}



})

module.exports = model('User', schema)