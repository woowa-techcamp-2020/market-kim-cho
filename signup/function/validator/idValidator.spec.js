/* eslint-disable no-undef */
import idValidator from "./idValidator";

test("validateId", () => {
  expect(idValidator("asdb123")).toBe(true);
  expect(idValidator("CDEe123-_")).toBe(false);
  expect(idValidator("asdb123-")).toBe(true);
});
