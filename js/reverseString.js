function reverseString(string) {
  if (typeof string === "string" && string.length) {
    return string.split("").reverse().join("");
  }
  return null;
}

export default reverseString;
