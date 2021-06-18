const { app, BrowserWindow } = require('electron');

let appWindow;

function crearVentana(){
    appWindow = new BrowserWindow({
        width : 1200,
        height : 800,
        minWidth : 800,
        minHeight : 600,
        center : true,
        show : false,
        icon : 'icon.png',
    });

    //Cuando la Aplicación es cerrada.
    appWindow.on('close', () => {
        appWindow = null;
    });

    //Cargar HTML
    appWindow.loadFile('./index.html');

    //Cuando la Aplicación este lista
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    })
}

app.on('ready', crearVentana);