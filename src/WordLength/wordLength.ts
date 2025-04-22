import {combinedLanguageRegex} from "./languages.js";

const getWordsLength = (str: string) => {

    const result: { word: string, count: number }[] = [];

    str.trim().split(/\s+/).forEach(word => {

        word = word.replace(combinedLanguageRegex, '');
        if (word.length !== 0) {
            result.push({word: word, count: word.length});
        }
    });

    if (result.length === 0)
        return 'No word in a string!';

    return result;
}

console.log(getWordsLength('\n' + 'Witaj świecie)) так кЙ  [m]]] zasdФафыВśПсиво \n' +
    'hej världen (kull-erbytta'));

export {getWordsLength}