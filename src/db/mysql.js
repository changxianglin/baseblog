const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db.js')

const con = mysql.concatConnection(MYSQL_CONF)

con.connect()

// 统一执行
function exec(sql) {
   const promise = new Promise((resolve, reject) => {
     con.query(sql, (err, result) => {
         if(err) {
           reject(err)
           return
       }
       resolve(result)
     })
  })
  return promise
}

module.exports = {
  exec
}