/* eslint-disable no-undef */
import emailValidator from "./emailValidator";

test("email string type 검사", () => {
  expect(emailValidator(123)).toBe(false);
  expect(emailValidator([])).toBe(false);

  expect(emailValidator("asdb123@naver.com")).toBe(true);
});

test("email 유효성 검사", () => {
  expect(emailValidator("CDEe123-_")).toBe(false);
  expect(emailValidator("123@")).toBe(false);

  expect(emailValidator("asdb123@naver.com")).toBe(true);
  expect(emailValidator("asdb123@naver")).toBe(true);
});
