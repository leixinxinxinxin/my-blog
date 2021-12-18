const express = require('express')
const app = express()
app.use(express.json())
app.use(require('cors')())
require('./routes/admin/index')(app)
require('./routes/web/index')(app)
require('./plugins/db')(app)

app.listen(4000,(req,res)=>{
    console.log('服务端已连接')
})