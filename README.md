# Newtion

This chrome extension makes it possible to use new-page shortcut for Notion in web browser.

`Cmd/Ctrl + Shift + L` to create & open new page!

日本語版はこちら(Japanse Version is here)

## Feature

- Open Source
- Free to use
- Safety

## How To Use

Please follow these steps below.

### Prepare Notion Integrations from setting page

- Access to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
- input basic information.
  - name
  - logo(optional)
  - Associated workspace
  - Capabilities
    - check Insert Content
    - ckeck No user Information
- then, submit and copy `Internal Integration Token` (use later).

### Prepare Notion Database

- Access to [https://www.notion.so/](https://www.notion.so/)
- Create new page with full screen database
- delete Tags colomn (Optional)
- Set leftmost colomn name to `Name`.
  - This will be updated...
- Get database id and copy (use later)
  - `https://www.notion.so/YOUR_DOMAIN/DATABASE_ID`
  - `DATABASE_ID` is database id.
- Invite your Integrations
  - Click share button header (in top of page)
  - Then, Select an integration you created some time ago.

### Set up Newtion

- Input `Cmd/Ctrl + Shift + L` to open setting popup.
- Input Database ID and API Secret.

### Let's use Newtion Shortcut!

Input `Cmd/Crtl + Shift + I` to create and open new page!

## Developing Environment

- node `v16.14.0`
- npm `8.3.1`
- Notion API v1
  - Docs:[https://developers.notion.com/reference/post-page](https://developers.notion.com/reference/post-page)

## Contribute

in preparation...

## Developer

I'm japanese university student.

### Related Links

- Twitter(ja)
- Github
- Blog(ja)
- Zenn(ja)

## Special Thanks

This source code is derived from [https://github.com/chibat/chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter).

Thanks.
