const axios = require('axios')

exports.postRequest = (req, res) => {
  let url = 'http://www.liulongbin.top:8000' + req.url
  // 直接发起一个服务器请求
  let authorization = req.headers.authorization
  let config = null
  if (authorization) {
    config = { headers: { Authorization: authorization } }
  }
  axios.post(url, req.body, config).then(
    (data) => {
      return res.send(data.data)
    },
    (err) => {
      return res.send(err)
    }
  )
}
