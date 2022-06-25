const mongoose = require('mongoose')


const PorteFenColissante576D = new mongoose.Schema({


    D : {
        type : String,
        default : '',
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PorteFenColissante576D", PorteFenColissante576D)