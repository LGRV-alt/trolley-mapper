import { describe, it, expect } from "vitest";

// Function to test
const sum = (a: number, b: number) => a + b;

describe("sum function", () => {
  it("should add two numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should handle negative numbers", () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});
