const mongoose = require('mongoose')


const PorteFenFrancaisAccessoire = new mongoose.Schema({


    Accessoire : {
        type : String,
        default : '',
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PorteFenFrancaisAccessoire", PorteFenFrancaisAccessoire)