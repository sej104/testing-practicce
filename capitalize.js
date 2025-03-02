function capitalize(string) {
  if (typeof string === "string" && string.length && isNaN(string.at(0))) {
    const firstLetter = string.at(0);
    return string.replace(firstLetter, firstLetter.toUpperCase());
  }
  return null;
}

export default capitalize;
