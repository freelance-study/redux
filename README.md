# redux
## インストール手順
npm -i
で必要なパッケージをインストール

npm install -g browserify

echo '{"presets": ["es2015"]}' > .babelrc
でbabelの設定ファイル追加

## サンプル概要
redux公式TODOアプリを使った簡単な説明

### 出力
browserify ./src/app.js -t babelify --outfile ./dist/app.js

### 確認
node ./dist/app.js
