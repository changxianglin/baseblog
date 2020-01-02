const {
getList,
getDetail,
newBlog,
updateBlog,
delBlog
} = require('../controller/blog')
const {   SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method // GET POST
  const id = req.query.id

  if(method === 'GET' && req.path === '/api/blog/list') {
      const author = req.query.author || ''
      const keyword = req.query.keyword || ''
      // const listData = getList(author, keyword)
      // return new SuccessModel(listData)
      const result = getList(author, keyword)
      return result.then(listData => {
          return new SuccessModel(listData)
      })
}

  if(method === 'GET' && req.path === '/api/blog/detail') {
      const id = req.query.id
      const data = getDetail(id)
      return new SuccessModel(data)
}

  if(method === 'POST' && req.path === '/api/blog/new') {
      const blogData = req.body
      const data = newBlog(blogData)
      return new SuccessModel(data)
  }

if(method === 'POST' && req.path === '/api/blog/update') {
    const blogData = req.body
    const result = updateBlog(id, blogData)
    if(result) {
        return new SuccessModel()
    } else {
        return new ErrorModel('更新博客失败')
    }
  }

if(method === 'POST' && req.path === '/api/blog/del') {
    const result = delBlog(id)
    if(result) {
        return new SuccessModel()
    } else {
        return new ErrorModel('删除博客失败')
    }
}

}

module.exports = handleBlogRouter
