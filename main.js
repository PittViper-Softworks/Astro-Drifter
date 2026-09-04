const { app, BrowserWindow } = require('electron');
const path = require('path');

require('update-electron-app')();

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 576,
        resizable: true,
        useContentSize: true,
        autoHideMenuBar: true, // Hides the default browser menu bar
        icon: path.join(__dirname, 'icon.ico'), // Links your custom icon
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});