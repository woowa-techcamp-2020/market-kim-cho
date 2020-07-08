/* eslint-disable no-undef */
import login from "./login";

test("can login", () => {
  expect(login("admin", "wrong pass").isSuccess).toBe(false);
  expect(login("admin", "12345678").isSuccess).toBe(true);
  expect(login("admin", "admin2").isSuccess).toBe(false);
});
