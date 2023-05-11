import { describe, expect, test } from "@jest/globals";
import isEven from "../isEven";

describe("check if number is even", () => {
  test("value should return even", () => {
    expect(isEven(2)).toBe(true);
  });
  test("value should return even", () => {
    expect(isEven(3)).toBe(false);
  });
});
