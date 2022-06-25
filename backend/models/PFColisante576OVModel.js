const mongoose = require('mongoose')


const PorteFenColissante576OV = new mongoose.Schema({


    OV : {
        type : String,
        default : '',
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PorteFenColissante576OV", PorteFenColissante576OV)