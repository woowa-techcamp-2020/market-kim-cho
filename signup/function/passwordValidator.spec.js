/* eslint-disable no-undef */
import passwordValidator from "./passwordValidator";

test("password 자리수 검사", () => {
  expect(passwordValidator("123")).toBe(false);
  expect(passwordValidator("12345678")).toBe(true);
  expect(passwordValidator("123456789012345678901")).toBe(false);
});

test("password 영어,숫자 검사", () => {
  expect(passwordValidator("12345678")).toBe(true);
  expect(passwordValidator("asdf1234")).toBe(true);
  expect(passwordValidator("ㅁㄴㅇㄹㄴㅇㄹ1234")).toBe(false);
});
