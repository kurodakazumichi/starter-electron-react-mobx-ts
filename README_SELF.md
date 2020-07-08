---
marp: true
---
<!-- theme: gaia -->
<!-- size: 16:9 -->

# electron-webpack-quick-start

---

# electron-webpackとは？

- 最近のウェブ開発はwebpackとかbabelとかeslintとか、その他もろもろ沢山のセットアップがあって大変。

- 残念なことにElectron開発をする場合のセットアップもとても大変でした。

- electron-webpackは、こういっためんどくさくて大変なセットアップを不要にしてさっさとアプリケーション開発が始められるようにするものです。

---

# quick-startの導入と動作確認

```
git clone https://github.com/electron-userland/electron-webpack-quick-start.git
cd electron-webpack-quick-start
rm -rf .git

yarn
```

いろいろインストールされる

```
yarn dev
```

動いた

---

# electron-webpackの素晴らさ

- 詳細なドキュメント
- ソースコードのバンドルにwebpackを使用する
- 開発にwebpack-dev-serverを使用する
- レンダラーとメインプロセスの両方でHMR**←最高**
- electronのversionに基づいて自動的に設定される @babel/preset-env の使用
- webpackのローダーやプラグインなどを追加する機能
- TypeScript、Less、EJSなどの項目をサポートするアドオン

---

# 基本の構造
```
my-project/
├─ src/
│  ├─ main/
│  │  └─ index.js
│  ├─ renderer/
│  │  └─ index.js
│  └─ common/
└─ static/
```

---

- src/main
  メインプロセスに関するコード
- src/renderer (OPTIONAL)
  Reactとか何かしらのウェブアプリケーション
- src/common (OPTIONAL)
  mainとrendererで共通なユーティリティ
- static (OPTIONAL)
  webpackでバンドルされたくないようなもの

---

electron-webpackが望む事

- mainとrendererでディレクトリが別れている事
- それぞれにエントリーポイントとなるファイルがある事
  - index.js or main.js
  - index.ts or main.ts (TypeScriptの場合)