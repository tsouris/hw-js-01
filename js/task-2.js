// Task 2
// Напиши функцію `findLongestWord(string)`, яка приймає параметром довільний рядок
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому
// рядку.

const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    // Check if the current word is longer than the current longest word
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
