const { ipcMain } = require('electron')

ipcMain.on('synchronous-message', (event, arg) => {
  event.returnValue = 'pong'
})

ipcMain.on('mysql-query-message', (event, arg) => {
  event.returnValue = 'success'
})
