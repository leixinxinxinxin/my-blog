module.exports=app=>{
    const express = require('express')
    const router = express.Router()
    const Javascript = require('../../models/Javascript')
    const Kit = require('../../models/Kit')

    app.use('/web/api',router)

    router.get('/javascript',async (req,res)=>{
        const data = await Javascript.find().limit(4)
        res.send(data)
    })

    router.get('/kits',async (req,res)=>{
        const data = await Kit.find().limit(10)
        res.send(data)
    })

    router.get('/mistakes',async (req,res)=>{
        const data = await Mistake.find().limit(10)
        res.send(data)
    })




}