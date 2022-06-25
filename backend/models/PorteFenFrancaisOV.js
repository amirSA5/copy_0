const mongoose = require('mongoose')


const PorteFenFrancaisOV = new mongoose.Schema({


    OV : {
        type : String,
        default : '',
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PorteFenFrancaisOV", PorteFenFrancaisOV)