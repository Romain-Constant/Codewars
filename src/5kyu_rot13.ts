export function rot13(inputString: string): string {
  const lowerCaseMinValue = 97;
  const lowerCaseMaxValue = 123;
  const upperCaseMinValue = 65;
  const upperCaseMaxValue = 91;
  const offsetValue = 13;

  function isLowerCase(letter: string): boolean {
    return (
      letter.charCodeAt(0) >= lowerCaseMinValue &&
      letter.charCodeAt(0) < lowerCaseMaxValue
    );
  }

  function isUpperCase(letter: string): boolean {
    return (
      letter.charCodeAt(0) >= upperCaseMinValue &&
      letter.charCodeAt(0) < upperCaseMaxValue
    );
  }

  const returnArray = [];

  for (let letter of inputString) {
    if (isLowerCase(letter)) {
      let letterAsciiValue =
        letter.charCodeAt(0) + offsetValue < lowerCaseMaxValue
          ? letter.charCodeAt(0) + offsetValue
          : lowerCaseMinValue +
            offsetValue -
            (lowerCaseMaxValue - letter.charCodeAt(0));
      returnArray.push(String.fromCharCode(letterAsciiValue));
    } else if (isUpperCase(letter)) {
      let letterAsciiValue =
        letter.charCodeAt(0) + offsetValue < upperCaseMaxValue
          ? letter.charCodeAt(0) + offsetValue
          : upperCaseMinValue +
            offsetValue -
            (upperCaseMaxValue - letter.charCodeAt(0));
      returnArray.push(String.fromCharCode(letterAsciiValue));
    } else {
      returnArray.push(letter);
    }
  }

  return returnArray.join("");
}
