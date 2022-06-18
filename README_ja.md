<div align="center">
	<h1>Newtion</h1>
	<p>
		<b>ブラウザで新規ページのショートカットを</b>
	</p>
	<br>
</div>

![Newtion](https://user-images.githubusercontent.com/65804288/174427968-b8cf0e56-b765-4aa8-9039-a8f177166f86.png)

[![build](https://github.com/cohu-dev/newtion/actions/workflows/build.yml/badge.svg)](https://github.com/cohu-dev/newtion/actions/workflows/build.yml)

ドキュメント:[英語](./README.md),[日本語](./README_ja.md)

この Chrome 拡張機能を使うと、Web ブラウザで新規ページを開くショートカットを使うことができます。

`Cmd/Ctrl + Shift + L` を押して新規ページを作り、そして開こう！

## インストール

[chrome ウェブストア]()へアクセスしてください。

## 特徴

<!-- GIF using sample -->

- オープンソースソフトウェア
- 無料で利用できる
- 安全に利用できる

## 設定方法

以下の 3 ステップに従ってください。

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
- 一番左の列を`Name` に変更する(英語設定では標準で`Name`)
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

### さあ、Newtion を使おう！

おめでとうございます!

`Cmd/Crtl + Shift + I`を入力し、新規ページを作り・開きましょう。

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

### 関連リンク（更新予定）

- Twitter(ja)
- Github
- Blog(ja)
- Zenn(ja)
