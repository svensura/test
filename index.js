const {app, BrowserWindow } = require('electron')


let window

const createWindow = () => {

    window = new BrowserWindow ({
        width: 800, 
        height : 600,
        webPreferences: {
            nodeIntegration: true
        }

    })
    window.loadURL(`file://${__dirname}/index.html`)
    window.webContents.openDevTools()

} 

app.on('ready',createWindow)

