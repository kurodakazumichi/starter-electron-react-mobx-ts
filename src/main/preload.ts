const electron = require('electron');

process.once('loaded', () => {
  console.log('---- preload.js loaded ts ----');
  // globalに入れるとwindowオブジェクトのプロパティに設定される
  (global as any).electron = electron;
  (global as any).module   = module;
});