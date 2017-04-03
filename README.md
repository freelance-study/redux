# redux
## インストール手順
npm -i
で必要なパッケージをインストール

echo '{"presets": ["es2015"]}' > .babelrc
でbabelの設定ファイル追加


### 出力
browserify ./src/app.js -t babelify --outfile ./dist/app.js

### 確認
node ./dist/app.js
