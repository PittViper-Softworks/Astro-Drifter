const { app, BrowserWindow } = require('electron');
const path = require('path');
const { updateElectronApp } = require('update-electron-app');

updateElectronApp();

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 576,
        resizable: true,
        useContentSize: true,
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'icon.ico'),
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