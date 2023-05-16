import { describe, expect, test } from "@jest/globals";
import isAcceptablePassword from "../isAcceptablePassword";

describe("check if password length is acceptable", () => {
  test("password length less than 6 characters should return false", () => {
    expect(isAcceptablePassword("short")).toBe(false);
  });
  test("password length more than 6 characters should return false", () => {
    expect(isAcceptablePassword("looooong")).toBe(true);
  });
});
