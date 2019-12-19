const serveHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')

  const resData = {
    name: '湘林',
    site: 'imooc',
    env: process.env.NODE_ENV,
  }

  res.end(
    JSON.stringify(resData)
  )
}

module.exports = serveHandle
