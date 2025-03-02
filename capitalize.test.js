import capitalize from "./capitalize.js";

test("capitalize first letter of a string", () => {
  expect(capitalize("apple")).toBe("Apple");
  expect(capitalize("banana")).toBe("Banana");
  expect(capitalize("the odin project")).toBe("The odin project");
  expect(capitalize("")).toBeNull();
  expect(capitalize(0)).toBeNull();
  expect(capitalize("0")).toBeNull();
  expect(capitalize(true)).toBeNull();
  expect(capitalize(null)).toBeNull();
  expect(capitalize("0cherry")).toBeNull();
  expect(capitalize("a")).toBe("A");
});
