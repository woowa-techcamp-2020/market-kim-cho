/* eslint-disable no-undef */
import phoneValidator from "./phoneValidator";

test("phone number 자리수 검사", () => {
  expect(phoneValidator("123")).toBe(false);
  expect(phoneValidator("01012345678")).toBe(true);
  expect(phoneValidator("0101234123")).toBe(true);
  expect(phoneValidator("12341234")).toBe(false);
});

test("phone number 숫자만인지 검사", () => {
  expect(phoneValidator("01012341234")).toBe(true);
  expect(phoneValidator("010-1234-1234")).toBe(false);
  expect(phoneValidator("010,1234,1234")).toBe(false);
  expect(phoneValidator("--a-s-,1234")).toBe(false);
  expect(phoneValidator("일이삼사일이삼사")).toBe(false);
});
