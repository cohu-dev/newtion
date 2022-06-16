import { removeHyphen } from "../libs/utils";

test("[a-z] and hypen", () => {
  expect(removeHyphen("hoge-hoge-hoge-hoge")).toBe("hogehogehogehoge");
});

test("[0-9] and hypen", () => {
  expect(removeHyphen("1234-5678-9012-3456")).toBe("1234567890123456");
});
