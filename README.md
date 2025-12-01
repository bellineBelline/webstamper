# webstamper


## プロジェクトの新規作成
```bash
npm create vite@latest
```
↓
```bash
>npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  webstamper
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in C:\taskBell\GItRepos\GitHub\webstamper\webstamper...
│
◇  Installing dependencies with npm...

added 157 packages, and audited 158 packages in 11s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...
```

## パッケージのインストール
* パッケージの復元
```bash
npm install
```

## React Routerのインストール
```bash
npm install react-router-dom
```

## React toastify
```bash
npm install react-toastify
```

## cookie
```bash
npm install js-cookie
```


## 環境設定（.env）ファイル
```.env
# 動作モード
VITE_MODE=DEV

# 接続先
VITE_URL_API_DOMAIN_STUB=https://gzypnpuem4.execute-api.ap-northeast-1.amazonaws.com/stub/read
VITE_URL_API_DOMAIN_DEV=
```