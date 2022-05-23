const axios = require('axios')
const qs = require('qs')
exports.deleteRequest = (req, res) => {
  // let url = 'http://www.liulongbin.top:8000' + req.url
  let url = 'http://www.liulongbin.top:8000' + req.url
  // 直接发起一个服务器请求
  let authorization = req.headers.authorization
  let config = null
  if (authorization) {
    config = { headers: { Authorization: authorization } }
  }
  res.status(204)
  axios.delete(url, config).then(
    (data) => {
      return res.send()
    },
    (err) => {
      return res.send(err)
    }
  )
}
