import {combinedLanguageRegex} from "./languages.js";

const getWordsLength = (str) => {

    if (typeof str !== 'string') {
        return 'Argument must be a string!';
    }

    const result = [];

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

export {getWordsLength}