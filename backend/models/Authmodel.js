const { Schema, model } = require("mongoose")

const AuthSchema = new Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }

})

const AuthModel = model("Auth", AuthSchema)

module.exports = AuthModel