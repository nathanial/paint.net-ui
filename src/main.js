import app from 'app';
import BrowserWindow from 'browser-window';


app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    'auto-hide-menu-bar' : true
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
