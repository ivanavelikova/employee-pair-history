function splitString(string) {
  return string.split(/(\r\n|\r|\n)/g);
}

function trimString(string) {
  return string.trim();
}

function formatArrayToMatrix(array) {
  return array
    .filter((row) => row.trim().length !== 0)
    .map((row) => row.split(",").map(trimString));
}

function sanitizeArray(array) {
  return array.map((row) => {
    return row.map(trimString);
  });
}

export { splitString, formatArrayToMatrix, sanitizeArray };