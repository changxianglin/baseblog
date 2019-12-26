const getList = (author, keyword) => {
  // 先 mock
  return [
      {
  id: 1,
  title: '标题A',
  content: '内容A',
  createTime: '1577119951582',
  author: 'zhangsan',
},
{
id: 2,
title: '标题B',
content: '内容B',
createTime: '1577119961507',
author: 'lisi',
}
  ]
}

const getDetail = (id) => {
  // 先 mock
  return {
id: 1,
title: '标题A',
content: '内容A',
createTime: '1577119951582',
author: 'zhangsan',
}
}

const newBlog = (blogData = {}) => {
    // save database
    console.log('newBlod ....', blogData)
    return {
        id: 3
  }
}


const updateBlog = (id, blogData = {}) => {
    // 应该更新博客
    console.log('updateBlog ....', id, blogData)
    return true
}

const delBlog = (id) => {
  // 删除的 id
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
}
