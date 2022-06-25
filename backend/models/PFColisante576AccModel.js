const mongoose = require('mongoose')


const PorteFenColissante576Accessoire = new mongoose.Schema({


    Accessoire : {
        type : String,
        default : '',
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PorteFenColissante576Accessoire", PorteFenColissante576Accessoire)