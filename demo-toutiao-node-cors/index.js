const cors = require('cors')
const express = require('express')
const path = require('path')
const app = express()

const getRequest = require('./router/getRequest')
const postRequest = require('./router/postRequest')
const deleteRequest = require('./router/deleteRequest')
const patchRequest = require('./router/patchRequest')
const putRequest = require('./router/putRequest')
// 通过第三方中间件cors 来实现跨域问题
app.use(cors()) //如果访问的是目标服务器，那么这里就相当于一个服务器代理
//配置解析 application/json 格式的表单数据的中间件
app.use(express.json())
//配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
// app.use(express.urlencoded({ extended: true }))

app.use(getRequest)
app.use(postRequest)
app.use(deleteRequest)
app.use(patchRequest)
app.use(putRequest)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`))
