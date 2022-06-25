const mongoose = require('mongoose')

const ArticleTemplate = new mongoose.Schema({

    Nom:{
        type : String,
        required : true,
        trim: true,
        unique: true,
        index:true,
        sparse:true
    },
    images:{
        type: Object,
        required: true
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('ArticlesDataBase',ArticleTemplate)