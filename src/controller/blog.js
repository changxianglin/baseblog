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

module.exports = {
  getList
}
