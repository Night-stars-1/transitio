const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("transitio", {
    rendererReady: () => ipcRenderer.send(
        "LiteLoader.transitio.rendererReady"
    ),
    configChange: (name, enable) => ipcRenderer.send(
        "LiteLoader.transitio.configChange",
        name, enable
    ),
    devMode: (enable) => ipcRenderer.send(
        "LiteLoader.transitio.devMode",
        enable
    ),
    onUpdateStyle: (callback) => ipcRenderer.on(
        "LiteLoader.transitio.updateStyle",
        callback
    ),
    onResetStyle: (callback) => ipcRenderer.on(
        "LiteLoader.transitio.resetStyle",
        callback
    ),
    reloadStyle: () => ipcRenderer.send(
        "LiteLoader.transitio.reloadStyle"
    ),
});