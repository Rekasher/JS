import {getWordsLength} from "../wordsLength.js";

describe('getWords and there length', () => {
    it('should return an array of objects with with info about words and there length', () => {
        const words = getWordsLength('\n' + 'Witaj świecie)) так кЙ  [m]]] zasdФафыВśПсиво \n' +
            'hej världen (kull-erbytta')

        expect(words).toEqual([
                {word: 'Witaj', count: 5},
                {word: 'świecie', count: 7},
                {word: 'так', count: 3},
                {word: 'кЙ', count: 2},
                {word: 'm', count: 1},
                {word: 'zasdФафыВśПсиво', count: 15},
                {word: 'hej', count: 3},
                {word: 'världen', count: 7},
                {word: 'kullerbytta', count: 11}
            ]
        );

    });
});