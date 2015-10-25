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
    height: 800
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
