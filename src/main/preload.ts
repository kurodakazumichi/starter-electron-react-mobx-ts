import electron from 'electron';
import fs from 'fs';
import path from 'path';

process.once('loaded', () => {

  console.log('---- preload.js loaded ts ----');
  // globalに入れるとwindowオブジェクトのプロパティに設定される
  (global as any).electron = electron;
  (global as any).module   = module;
  (global as any).test     = () => {
    const pathToAsset = path.join(__static, '/foobar.txt');
    const fileContents = fs.readFileSync(pathToAsset, 'utf8');
    return fileContents;
  }
  
});