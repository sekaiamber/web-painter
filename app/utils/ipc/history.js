const ipc = require('electron').ipcRenderer

let history = [];
let current = -1;

// EventEmitter
exEventEmitter.on('addHistory', (key, prevValue, currentValue, undoHandler, redoHandler) => {
  let page = pageEditor.project.currentPage;
  page.history.splice(page.currentHistoryIndex + 1, page.history.length - page.currentHistoryIndex - 1, {
    key: key,
    prev: prevValue,
    current: currentValue,
    undoHandler: undoHandler,
    redoHandler: redoHandler
  });
  page.currentHistoryIndex += 1;
})


// undo
ipc.on('undo-event', function (event) {
  let page = pageEditor.project.currentPage;
  if (page.currentHistoryIndex == -1) return;
  let e = page.history[page.currentHistoryIndex];
  e.undoHandler(e.prevValue, e.currentValue);
  exEventEmitter.emit('updateBodyPieceRender');
  exEventEmitter.emit('updateAttributeBar');
  page.currentHistoryIndex -= 1;
})

// redo
ipc.on('redo-event', function (event) {
  let page = pageEditor.project.currentPage;
  if (page.currentHistoryIndex == page.history.length - 1) return;
  let e = page.history[page.currentHistoryIndex + 1];
  e.redoHandler(e.prevValue, e.currentValue);
  exEventEmitter.emit('updateBodyPieceRender');
  exEventEmitter.emit('updateAttributeBar');
  page.currentHistoryIndex += 1;
})