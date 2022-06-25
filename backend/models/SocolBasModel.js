const mongoose = require('mongoose')


const PorteFenFrancaisSocolBas = new mongoose.Schema({


    SocolBas : {
        type : String,
        default : '',
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PorteFenFrancaisSocolBas", PorteFenFrancaisSocolBas)