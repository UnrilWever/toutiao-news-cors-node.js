const axios = require('axios')

exports.putRequest = (req, res) => {
  let url = 'http://www.liulongbin.top:8000' + req.url
  // 直接发起一个服务器请求
  let authorization = req.headers.authorization
  let config = null
  if (authorization) {
    config = { headers: { Authorization: authorization } }
  }
  axios.get(url, req.body, config).then((data) => {
    res.send(data.data)
  })
}
