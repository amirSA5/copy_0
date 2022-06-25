const mongoose = require('mongoose')


const PorteFenColissante580D = new mongoose.Schema({


    D : {
        type : String,
        default : '',
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PorteFenColissante580D", PorteFenColissante580D)