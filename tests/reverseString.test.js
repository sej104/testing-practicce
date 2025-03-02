import reverseString from "../js/reverseString";

test("reversing a string", () => {
  expect(reverseString("pizza")).toBe("azzip");
  expect(reverseString("burger")).toBe("regrub");
  expect(reverseString("ice cream")).toBe("maerc eci");
  expect(reverseString("a")).toBe("a");
  expect(reverseString(0)).toBeNull();
  expect(reverseString("5")).toBe("5");
  expect(reverseString("100")).toBe("001");
  expect(reverseString(100)).toBeNull();
  expect(reverseString()).toBeNull();
  expect(reverseString(null)).toBeNull();
  expect(reverseString(false)).toBeNull();
  expect(reverseString("")).toBeNull();
});
