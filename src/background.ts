import { Client } from "@notionhq/client";
import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";
import { removeHyphen } from "./libs/utils";

chrome.commands.onCommand.addListener((cmd) => {
  if (cmd === "newtion") {
    chrome.storage.local.get(["dbId", "apiSec"], (res) => {
      const notion = new Client({
        auth: res.apiSec,
      });
      const requestBody: CreatePageParameters = {
        parent: {
          type: "database_id",
          database_id: res.dbId,
        },
        icon: {
          type: "emoji",
          emoji: "🆕",
          // TODO: custom emoji by user input
        },
        properties: {
          // TODO: custom column by user input
          Name: {
            title: [
              {
                text: {
                  content: "",
                  // TODO: custom page title by user input
                },
              },
            ],
          },
        },
      };
      const createPage = async () => {
        const response = await notion.pages.create(requestBody);
        // open with modal in Notion
        const url = `https://www.notion.so/${removeHyphen(
          res.dbId
        )}?p=${removeHyphen(response.id)}`;
        await chrome.tabs.create({
          url,
        });
      };
      try {
        createPage();
      } catch {
        //   TODO: inform error
      }
    });
  } else {
    //   TODO: inform not exist shortcut
  }
});
