# Kintone Plugin ✖️ React ✖️ Vite ⚡️ Template

## 初期化

```
npm install
npm run init
```

## .envファイルを作成

- Change `.env.example` to your settings and rename it to `.env`

```
KINTONE_BASE_URL=https://____your_subdomain____.cybozu.com/
KINTONE_USERNAME=____username____
KINTONE_PASSWORD=____password____
KINTONE_BASIC_AUTH_USERNAME=____basic_auth_username____
KINTONE_BASIC_AUTH_PASSWORD=____basic_auth_password____
```

## 開発

```
npm run dev
```

## アップロード

```
npm run vite
npm run kintone
npm run upload
```

## ファイル構成

```
.
├── README.md
├── dist ... plugin.zipが出力される
├── package-lock.json
├── package.json
├── plugin ... ビルドしたファイルが配置される
├── scripts
├── src
│   ├── components
│   ├── config ... 設定画面
│   ├── desktop ... PC用の設定
│   ├── mobile ... 携帯電話用の設定
│   ├── static ... プラグインに使用する静的ファイルを配置
│   │   ├── css
│   │   ├── html
│   │   ├── image
│   │   └── manifest.json
│   ├── store
│   ├── types
│   └── utils
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
