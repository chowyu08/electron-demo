const { ipcRenderer } = require('electron')

const queryMsgBtn = document.getElementById('mysql-query')

queryMsgBtn.addEventListener('click', () => {
    console.log('-----')
    const reply = ipcRenderer.sendSync('mysql-query-message', 'query')
    const message = `mysql-query message reply: ${reply}`
    document.getElementById('mysql-query-reply').innerHTML = message
})
