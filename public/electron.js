#!/usr/bin/env node

const { app, BrowserWindow } = require('electron');
const path = require('path');
const log = require('electron-log');

const { appUpdater } = require('./autoupdater');

log.info('Hello, log')

let mainWindow;

// const isDev = process.env.NODE_ENV !== 'production';
const isDev = false;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      contextIsolation: false,
      webSecurity: false  // Disables CORS restrictions
    }
  });

  isDev
    ? mainWindow.loadURL('http://localhost:3000')
    :mainWindow.loadFile(path.join(__dirname, './index.html'));
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const page = mainWindow.webContents;
  
  page.once('did-frame-finish-load', () => {
    const checkOS = isWindowsOrmacOS();
    if (checkOS && !isDev) {
      // Initate auto-updates on macOs and windows
      appUpdater();
    }
  });


}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Funtion to check the current OS. As of now there is no proper method to add auto-updates to linux platform.
function isWindowsOrmacOS() {
	return process.platform === 'darwin' || process.platform === 'win32';
}