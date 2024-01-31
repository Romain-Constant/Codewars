export const high = (str: string): string => {
  const words = str.split(" ");
  let highestWord = "";

  for (const currentWord of words) {
    if (
      !highestWord ||
      calculateWordScore(currentWord) > calculateWordScore(highestWord)
    ) {
      highestWord = currentWord;
    }
  }

  function calculateWordScore(word: string): number {
    return word
      .split("")
      .reduce(
        (score, letter) => score + letter.charCodeAt(0) - "a".charCodeAt(0) + 1,
        0
      );
  }

  return highestWord;
};
