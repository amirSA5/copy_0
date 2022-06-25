const mongoose = require('mongoose')


const PorteFenFrancaisD = new mongoose.Schema({


    D : {
        type : String,
        default : '',
        required:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("PorteFenFrancaisD", PorteFenFrancaisD)