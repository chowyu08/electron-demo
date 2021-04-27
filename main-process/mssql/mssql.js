const { ipcMain } = require('electron')
const sql = require('mssql') //声明插件

const config = {
    user: '...',
    password: '...',
    server: 'localhost',
    database: '...',
    options: {
        encrypt: true //使用windows azure，需要设置次配置。
    }
}

ipcMain.on('mysql-query-message', (event, arg) => {
    event.returnValue = 'success'
})


function query(sql) {
    sql.connect(config).then(() => {
        return sql.query`select * from mytable where id = ${value}`
    }).then(result => {
        console.log("query success")
        return result
    }).catch(err => {
        console.log("query exception")
    })
}

sql.on('error', err => {
    console.log("sql error" + err)
})