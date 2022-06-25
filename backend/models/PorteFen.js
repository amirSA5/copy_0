const mongoose = require('mongoose')


const PorteFen = new mongoose.Schema({

    Nom : {
        type:String,
        required : true,
        trim: true,
        unique: true
    },

    Article : {
        type:String,
        required : true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PorteFen", PorteFen)