const axios = require('axios')
//导入处理文件与路径的内置模块
const path = require('path')
const fs = require('fs')
const FormData = require('form-data')

exports.patchRequest = (req, res) => {
  let url = 'http://www.liulongbin.top:8000' + req.url
  // 直接发起一个服务器请求
  let authorization = req.headers.authorization
  let config = null
  if (authorization) {
    config = { headers: { Authorization: authorization } }
  }

  let params
  if (req.file) {
    // 3.1旧路径直接req.file.path,
    let oldPath = req.file.path
    // 3.2新路径要先拼接:
    let newPath = path.join('uploads', req.file.originalname)
    // 3.3修改文件名:
    fs.renameSync(oldPath, newPath)

    config.headers['Content-Type'] = 'multipart/form-data'

    // 1.1 创建 FormData 的对象
    const form = new FormData()
    // 1.2 向 fd 中追加数据项
    form.append('photo', fs.createReadStream(path.join('uploads', req.file.originalname)))
    params = form
  } else {
    params = req.body
  }

  axios.patch(url, params, config).then(
    (data) => {
      //得到目标服务器响应就删除本服务器的文件
      if (req.file) {
        fs.unlink(path.join(__dirname, '../uploads', req.file.originalname), (err) => {
          if (err) {
            console.error(err)
            return
          }
        })
      }
      return res.send(data.data)
    },
    (err) => {
      return res.send(err)
    }
  )
}
