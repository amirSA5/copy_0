const mongoose = require('mongoose')


const PorteFenColissante580OV = new mongoose.Schema({


    OV : {
        type : String,
        default : '',
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PorteFenColissante580OV", PorteFenColissante580OV)