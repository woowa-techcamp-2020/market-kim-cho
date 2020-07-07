/* eslint-disable no-undef */
import nameValidator from "./nameValidator";

test("오직 한글만 되는지 확인", () => {
  expect(nameValidator("김깅동")).toBe(true);
  expect(nameValidator("홍홍홍")).toBe(true);
  expect(nameValidator("ㅎㅎㅎ")).toBe(true);

  expect(nameValidator("asdf")).toBe(false);
  expect(nameValidator("1231231")).toBe(false);
});
