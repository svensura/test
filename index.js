const {app, BrowserWindow } = require('electron')


let window

const createWindow = () => {

    window = new BrowserWindow ({
        width: 800, 
        height : 600,
        webPreferences: {
            nodeIntegration: true
        },
        fullscreen: true

    })
    window.loadURL(`file://${__dirname}/index.html`)
    //window.webContents.openDevTools()

} 

app.on('ready',createWindow)


app.on('window-all-closed', () => {
    app.quit()
  })

