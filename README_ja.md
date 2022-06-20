<div align="center">
	<h1>Newtion</h1>
	<p>
		<b>ブラウザで新規ページのNotionショートカットを作る</b>
	</p>
	<br>
</div>

![Newtion](https://user-images.githubusercontent.com/65804288/174465241-f46d9b14-8bd1-495b-a566-62aedc2b36d0.png)

[![build](https://github.com/cohu-dev/newtion/actions/workflows/build.yml/badge.svg)](https://github.com/cohu-dev/newtion/actions/workflows/build.yml)
![issue count](https://img.shields.io/github/issues/cohu-dev/newtion)
![forks count](https://img.shields.io/github/forks/cohu-dev/newtion)
![stars count](https://img.shields.io/github/stars/cohu-dev/newtion)
![license](https://img.shields.io/github/license/cohu-dev/newtion)
![twitter share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fcohu-dev%2Fnewtion)

ドキュメント:[英語(English)](./README.md),[日本語](./README_ja.md)

この Chrome 拡張機能を使うと、Web ブラウザで新規ページを開くショートカットを使うことができます。

`Cmd/Ctrl + Shift + L` を押して新規ページを作り、そして開こう！

## デモ

![demo](https://user-images.githubusercontent.com/65804288/174465615-3cc6c47f-d531-4a3f-8140-ff669beb913a.gif)

## 特徴

### 安全に利用できる

この Chrome 拡張機能は Notion の公式 API を必要としますが、必要な権限はデータの挿入だけで、ユーザー情報も不要です。

### オープンソースソフトウェア

ソースコードは公開されており、MIT ライセンスです。

## ショートカット

| ショートカット     | 動作                             |
| ------------------ | -------------------------------- |
| `Cmd/Ctrl+Shift+L` | 設定のポップアップを開く         |
| `Cmd/Ctrl+Shift+I` | 新規ページを作り新しいタブで開く |

## インストール

また、次のセクションで Newtion を設定する必要があります。

[chrome ウェブストア](https://chrome.google.com/webstore/detail/newtion/fdjjmpjjbhhepdakdifipaehpcgojkgf?hl=ja&authuser=0)へアクセスしてください。

GoogleChrome 以外のブラウザ拡張機能はお待ちください。

## 使い方

3 ステップの設定が必要です。以下の手順で設定してください。

### 1. 設定ページからインテグレーションを準備する

- [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)へアクセスし、`新しいインテグレーション`をクリック
- 情報の入力
  - 名前
  - ロゴ（任意）
  - 関連ワークスペース
  - 機能
    - `コンテンツを挿入`にチェック
    - `ユーザー情報なし`にチェック
- 送信を押し、トークンをコピーする（後で利用）

### 2. Notion のデータベースを準備

- [https://www.notion.so/](https://www.notion.so/)にアクセス
- 全画面データベースを作成する
- `タグ`の列を削除する（任意）
- **💡 一番左の列を`Name` に変更する(英語設定では標準で`Name`)**
  - 今後、修正が入ります
- データベースの ID をコピーします（後で利用）
  - `https://www.notion.so/ドメイン/DATABASE_ID`
  - `DATABASE_ID` がデータベース ID です。
- インテグレーションを招待する
  - ヘッダーにある共有ボタンをクリック
  - 先ほど作成したインテグレーションを選び招待する

### 3. Newtion の設定

- `Cmd/Ctrl + Shift + L` を入力し、ポップアップを開きます
  - または`Newtion`のアイコンを拡張機能の一覧からクリック
- データベース ID とトークンを入力します

### さあ、Newtion を使おう

おめでとうございます!

`Cmd/Ctrl + Shift + I`を入力し、新規ページを作り・開きましょう。

## 使用例

次のようなケースを想定しています。

- Web サイトを検索していて、その情報を Notion にまとめる
- ブラウザ版 Notion で新しいページを開くためのショートカットが見つからず困っている
- Notion で新しいページを開くと、サイドバーのページ数が増えてしまう

## 開発環境

- node `v16.14.0`
- npm `8.3.1`
- Notion API v1
  - Docs:[https://developers.notion.com/reference/post-page](https://developers.notion.com/reference/post-page)

### コマンド

```sh
npm run watch
npm run build
npm run clean
npm run test
```

## 貢献

準備中です。。。

## スペシャルサンクス

このソースコードは [https://github.com/chibat/chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter)より派生しています。

ありがとうございます。

## 開発者

日本人の大学生です。

## リンク

- [ホームページ](https://cohu-dev.github.io/newtion/README_ja)
- [プライバシーポリシー](https://cohu-dev.github.io/chrome-privacy-policy/README_ja)
