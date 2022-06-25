const express = require('express')
const router = express.Router()
const ArticleTemplate = require('../models/ArticlesModel')
const PorteFenFrancaisDTemplate = require('../models/PorteFenFrancaisD')
const PorteFenColissante576DTemplate = require('../models/PFColisante576DModel')
const PorteFenColissante576OVTemplate = require('../models/PFColisante576OVModel')
const PorteFenColissante576ACCTemplate = require('../models/PFColisante576AccModel')
const PorteFenFrancaisOVTemplate = require('../models/PorteFenFrancaisOV')
const PorteFenFrancaisSocolBasTemplate = require('../models/SocolBasModel')
const PorteFenFrancaisAccessoireTemplate = require('../models/PorteFenFrancaisAccessoire')
const PorteFenTemplate = require('../models/PorteFen')
const PorteFenColissante580DTemplate = require('../models/PFColissante580D')
const PorteFenColissante580OVTemplate = require('../models/PFColissante580OV')



router.post('/Ajout_articles', async (req,res)=>{
    try {
            
            const {Nom,images} = req.body;

            if(!images) return res.status(400).json({msg: "No image upload"})

            const article = await ArticleTemplate.findOne({Nom})
            if(article) return res.status(400).json({msg: "This article already exists."})

            const newArticle = new ArticleTemplate({Nom,images})

            await newArticle.save()
            res.json({msg: "Created a article"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Liste_articles',async (req,res)=>{
    try {
            const articles = await ArticleTemplate.find()
            res.json(articles)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Liste_articles/:id',async (req,res)=>{
    try {
            const article = await ArticleTemplate.findOne(req._id)
            res.json(article)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.delete('/deleteArticle/:id',async(req, res) =>{
        try {
            await ArticleTemplate.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted an Article"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    })

router.put('/updateArticle/:id',async(req, res) =>{
        try {
            const {Nom,images} = req.body;
            await ArticleTemplate.findOneAndUpdate({_id: req.params.id}, {Nom,images})

            res.json({msg: "Updated an Article"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    })

router.post('/Ajout_PorteFenFrancais_Profiler_D', async (req,res)=>{
    try {
            
            const {D} = req.body;

            const newProfiler = new PorteFenFrancaisDTemplate({D})

            await newProfiler.save()
            res.json({msg: "Created a profiler"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Get_PorteFenFrancais_Profiler_D',async(req, res) =>{
        try {
            const PorteFenFrancais = await PorteFenFrancaisDTemplate.find()
            res.json(PorteFenFrancais)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.post('/Ajout_PorteFenFrancais_Profiler_OV', async (req,res)=>{
    try {
            
            const {OV} = req.body;

            const newProfiler = new PorteFenFrancaisOVTemplate({OV})

            await newProfiler.save()
            res.json({msg: "Created a profiler"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Get_PorteFenFrancais_Profiler_OV',async(req, res) =>{
        try {
            const PorteFenFrancais = await PorteFenFrancaisOVTemplate.find()
            res.json(PorteFenFrancais)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})
router.post('/Ajout_PorteFen', async (req, res) =>{
        try {
            
            const {Nom,Article} = req.body;
            const PorteFen = await PorteFenTemplate.findOne({Nom})
            if(PorteFen) return res.status(400).json({msg: "This PorteFen already exists."})

             
            const newPortFen = new PorteFenTemplate({Nom,Article})

            await newPortFen.save()
            res.json({msg: "Created a PorteFen"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.post('/Ajout_PorteFenFrancais_Profiler_SocolBas', async (req,res)=>{
    try {
            
            const {SocolBas} = req.body;

            const newProfiler = new PorteFenFrancaisSocolBasTemplate({SocolBas})

            await newProfiler.save()
            res.json({msg: "Created a profiler"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Get_PorteFenFrancais_Profiler_SocolBas',async(req, res) =>{
        try {
            const PorteFenFrancais = await PorteFenFrancaisSocolBasTemplate.find()
            res.json(PorteFenFrancais)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.post('/Ajout_PorteFenFrancais_Profiler_Accessoires', async (req,res)=>{
    try {
            
            const {Accessoire} = req.body;

            const newProfiler = new PorteFenFrancaisAccessoireTemplate({Accessoire})

            await newProfiler.save()
            res.json({msg: "Created a profiler"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Get_PorteFenFrancais_Profiler_Accessoires',async(req, res) =>{
        try {
            const PorteFenFrancais = await PorteFenFrancaisAccessoireTemplate.find()
            res.json(PorteFenFrancais)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Get_PorteFen',async(req, res) =>{
        try {
            const PorteFen = await PorteFenTemplate.find()
            res.json(PorteFen)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.post('/Ajout_PorteColissante_576_Profiler_D', async (req,res)=>{
    try {
            
            const {D} = req.body;

            const newProfiler = new PorteFenColissante576DTemplate({D})

            await newProfiler.save()
            res.json({msg: "Created a profiler"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Get_PorteFenColissante_576_Profiler_D',async(req, res) =>{
        try {
            const PorteFenColissante = await PorteFenColissante576DTemplate.find()
            res.json(PorteFenColissante)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.post('/Ajout_PorteColissante_576_Profiler_OV', async (req,res)=>{
    try {
            
            const {OV} = req.body;

            const newProfiler = new PorteFenColissante576OVTemplate({OV})

            await newProfiler.save()
            res.json({msg: "Created a profiler"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Get_PorteFenColissante_576_Profiler_OV',async(req, res) =>{
        try {
            const PorteFenColissante = await PorteFenColissante576OVTemplate.find()
            res.json(PorteFenColissante)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.post('/Ajout_PorteColissante_576_Profiler_Acc', async (req,res)=>{
    try {
            
            const {Accessoire} = req.body;

            const newProfiler = new PorteFenColissante576ACCTemplate({Accessoire})

            await newProfiler.save()
            res.json({msg: "Created a profiler"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Get_PorteFenColissante_576_Profiler_Acc',async(req, res) =>{
        try {
            const PorteFenColissante = await PorteFenColissante576ACCTemplate.find()
            res.json(PorteFenColissante)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.post('/Ajout_PorteColissante_580_Profiler_D', async (req,res)=>{
    try {
            
            const {D} = req.body;

            const newProfiler = new PorteFenColissante580DTemplate({D})

            await newProfiler.save()
            res.json({msg: "Created a profiler"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Get_PorteFenColissante_580_Profiler_D',async(req, res) =>{
        try {
            const PorteFenColissante = await PorteFenColissante580DTemplate.find()
            res.json(PorteFenColissante)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.post('/Ajout_PorteColissante_580_Profiler_OV', async (req,res)=>{
    try {
            
            const {OV} = req.body;

            const newProfiler = new PorteFenColissante580OVTemplate({OV})

            await newProfiler.save()
            res.json({msg: "Created a profiler"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

router.get('/Get_PorteFenColissante_580_Profiler_OV',async(req, res) =>{
        try {
            const PorteFenColissante = await PorteFenColissante580OVTemplate.find()
            res.json(PorteFenColissante)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
})

module.exports = router