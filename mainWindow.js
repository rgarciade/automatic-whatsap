//Modules
const { BrowserWindow, ipcMain } = require('electron')
    //browseWindow instance
exports.win



exports.createWindow = () => {

    this.win = new BrowserWindow({
        width: 500,
        height: 650,
        minWidth: 350,
        maxWidth: 650,
        minHeight: 310,
        icon: `${__dirname}/icons/64x64.png` //,
            //show: false
    })

    //Devtools
    this.win.webContents.openDevTools()

    // and load the index.html of the app.
    this.win.loadFile('renderer/whatsap.html')

    //   Emitted when the window is closed.
    this.win.on('closed', () => {
        this.win = null
    })
}

// Listen for after-send-whatsap
/* ipcMain.on('after-send-whatsap', (e, itemUrl) => {
    // return app.js new-send-whatsap
     e.sender.send('new-send-whatsap', item)
}) */