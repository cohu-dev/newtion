<div align="center">
	<h1>Newtion</h1>
	<p>
		<b>make New page shortcut of Notion in web browser.</b>
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

Docs:[English](/README.md),[Japanese(日本語)](./README_ja.md)

This chrome extension makes it possible to use new-page shortcut for Notion in web browser.

## Demo

![demo](https://user-images.githubusercontent.com/65804288/174465615-3cc6c47f-d531-4a3f-8140-ff669beb913a.gif)

## Feature

### Open Source Software

The source code is publicly available and MIT license.

### Use safely

This Chrome extension requires Notion's official API, but the only permissions required are to insert data and no user information is required.

## Shortcuts

| Shortcut           | Action                        |
| ------------------ | ----------------------------- |
| `Cmd/Ctrl+Shift+L` | Open setting popup            |
| `Cmd/Ctrl+Shift+I` | Create & open new notion page |

## Install

You also need set Newtion in the next section.

Access to [chrome web store](https://chrome.google.com/webstore/detail/newtion/fdjjmpjjbhhepdakdifipaehpcgojkgf).

Please wait for browser extensions other than GoogleChrome.

## How to use

You need 3 step settings. Please follow below.

### 1. Prepare Notion Integrations from setting page

- Access to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations) and click `+ New Integration`
- Input basic information
  - name
  - logo(optional)
  - Associated workspace
  - Capabilities
    - check Insert Content
    - check No user Information
- then, submit and copy `Internal Integration Token` (use later)

### 2. Prepare Notion Database

- Access to [https://www.notion.so/](https://www.notion.so/)
- Create new page with full screen database
- Delete `Tags` colomn (Optional)
- **💡 Set leftmost colomn name to `Name` (default in English)**
  - This will be updated to customizable...
- Get database id and copy (use later)
  - `https://www.notion.so/YOUR_DOMAIN/DATABASE_ID`
  - `DATABASE_ID` is database id
- Invite your Integrations
  - Click share button in header
  - Then, Select an integration you created some time ago

### 3. Set up Newtion

- Input `Cmd/Ctrl + Shift + L` to open setting popup
  - or click `Newtion` in list of chrome extensions
- Input Database ID and API Secret (char is hidden)

### Let's use Newtion Shortcut

Congratulations!

Input `Cmd/Ctrl + Shift + I` to create and open new page!

## Usecase

I assume the following cases.

- When you are searching a Web site and want to summarize the information in Notion
- Having trouble finding a shortcut to open a new page in the browser version of Notion.
- Opening a new page in Notion causes the number of pages in the sidebar to increase.

## Developing Environment

- node `v16.14.0`
- npm `8.3.1`
- Notion API v1
  - Docs:[https://developers.notion.com/reference/post-page](https://developers.notion.com/reference/post-page)

### command

```sh
npm run watch
npm run build
npm run clean
npm run test
```

## Contribute

in preparation...

## Special Thanks

This source code is derived from [https://github.com/chibat/chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter).

Thanks.

## Developer

Hi, I'm japanese university student.

## Links

- [Home page](https://cohu-dev.github.io/newtion/)
- [Privacy Policy](https://cohu-dev.github.io/chrome-privacy-policy/)
