function capitalize(string) {
  if (!string) {
    throw new Error('Can\'t capitalize a null string!');
  }

  if (string.length === 1) return string.toUpperCase();

  if (string.includes(' ')) {
    var words = string.split(' ');

    words = words.map((word) => word[0].toUpperCase() + word.toLowerCase().slice(1));

    return words.join(' ');
  }

  return string[0].toUpperCase() + string.toLowerCase().slice(1);
}

module.exports = capitalize;