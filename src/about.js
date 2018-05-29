import BrowserWindow from 'sketch-module-web-view'
import pluginCall from 'sketch-module-web-view/client'
import openURL from './utils/openurl'
// const isDev = process.env.NODE_ENV === 'development'
// const Url = isDev?'http://localhost:1234':'index.html'
const Url = 'index.html'

export default function (context) {
    let win = new BrowserWindow({
        identifier: 'duanjun.getout.about',
        width: 300,
        height: 480,
        center: true,
        titleBarStyle:'onlyClose',
        shouldKeepAround: true,
        resizable: false,
        minimizable: false,
        alwaysOnTop: true
    })
    win.on('closed', () => {
        win = null
      })
    win.webContents.on('nativeLog',function(s){
        openURL(s)
    })
    win.loadURL(Url)
}