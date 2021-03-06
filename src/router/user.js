const { login } = require('../controller/user')
const {   SuccessModel, ErrorModel } = require('../model/resModel')

const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  console.log('toGMTString() is  ', d.toDateString())
  return d.toGMTString()
}

const handleUserRouter = (req, res) => {
  const method = req.method // GET POST

  if(method === 'GET' && req.path === '/api/user/login') {
      // const { username, password } = req.body
      const { username, password } = req.query
      const result = login(username, password)
      return result.then(data => {
           if(data.username) {
              // 操作 cookie
              res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpires()}`)

              return new SuccessModel()
           }
           return new ErrorModel('登录失败')
      })
  }

  // 登录验证的测试
  if(method ==='GET' && req.path === '/api/user/login-test') {
      if(req.cookie.username) {
          return Promise.resolve(new SuccessModel({
                username: req.cookie.username
          }))
      }
      return Promise.resolve(new ErrorModel('尚未登录'))
  }
}

module.exports = handleUserRouter
