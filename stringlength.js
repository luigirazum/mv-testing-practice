function stringLength(string) {
  if (!string) {
    throw new Error('the string provided must have at least one character!');
  }

  if (string.length > 10) {
    throw new Error('the string provided must be no longer than 10 characters!');
  }

  return string.length;
}

module.exports = stringLength;