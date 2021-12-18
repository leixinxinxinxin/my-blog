module.exports=app=>{
    const express = require('express')
    const router = express.Router()
    const Javascript = require('../../models/Javascript')
    const Kit = require('../../models/Kit')
    const Mistake = require('../../models/Mistake')

    app.use('/admin/api',router)
    // 创建资源
    router.post('/javascript',async (req,res)=>{
        const data = await Javascript.create(req.body);
        res.send(data)
    })
    // 获取资源列表
    router.get('/javascript',async (req,res)=>{
        const data = await Javascript.find();
        res.send(data)
    })
    router.get('/javascript/:id',async (req,res)=>{
        const data = await Javascript.findById(req.params.id)
        res.send(data)
    })
    // 修改资源
    router.put('/javascript/:id',async (req,res)=>{
        const data = await Javascript.findByIdAndUpdate(req.params.id,req.body)
        res.send(data)
    })
    // 删除资源
    router.delete('/javascript/:id',async (req,res)=>{
        await Javascript.findByIdAndDelete(req.params.id,req.body) 
        res.send({
            success:true
        })
    })

    router.post('/kits',async (req,res)=>{
        const data = await Kit.create(req.body);
        res.send(data)
    })
    // 获取资源列表
    router.get('/kits',async (req,res)=>{
        const data = await Kit.find();
        res.send(data)
    })
    router.get('/kits/:id',async (req,res)=>{
        const data = await Kit.findById(req.params.id)
        res.send(data)
    })
    // 修改资源
    router.put('/kits/:id',async (req,res)=>{
        const data = await Kit.findByIdAndUpdate(req.params.id,req.body)
        res.send(data)
    })
    // 删除资源
    router.delete('/kits/:id',async (req,res)=>{
        await Kit.findByIdAndDelete(req.params.id,req.body) 
        res.send({
            success:true
        })
    })

    router.post('/mistakes',async (req,res)=>{
        const data = await Mistake.create(req.body);
        res.send(data)
    })
    router.get('/mistakes',async (req,res)=>{
        const data = await Mistake.find();
        res.send(data)
    })
    router.get('/mistakes/:id',async (req,res)=>{
        const data = await Mistake.findById(req.params.id)
        res.send(data)
    })
    // 修改资源
    router.put('/mistakes/:id',async (req,res)=>{
        const data = await Mistake.findByIdAndUpdate(req.params.id,req.body)
        res.send(data)
    })
    // 删除资源
    router.delete('/mistakes/:id',async (req,res)=>{
        await Mistake.findByIdAndDelete(req.params.id,req.body) 
        res.send({
            success:true
        })
    })

    app.post('/admin/api/login',async (req,res)=>{
        // 
        const {username,password} = req.body
    
        const AdminUser= require('../../models/AdminUser')
        const user = await AdminUser.findOne({username}).select('+password')
        // if(!user){
        //     return res.status(422).send({message:'用户不存在'})
        // }
        assert(user,422,'用户不存在')
        
        const isValid = require('bcrypt').compareSync(password,user.password)
        assert(isValid,422,'密码错误')
        
        // 返回token
      
        const token = jwt.sign({id:user._id},app.get('secret'));
        res.send({token});
        
      
    })
}