import {duplicateOrUnique} from '../findDuplicateNumber/findDuplicate.js';

describe('findDuplicate', () => {
    it('should find the duplicate', () => {
        const dup = duplicateOrUnique([1, 2, 3, 6, 5, 4, 1]);

        expect(dup).toEqual(1);
    });

    it('should find the unique', () => {
        const unique = duplicateOrUnique([1, 2, 3, 1, 2, 3, 4]);

        expect(unique).toEqual(4);
    });

    it('should find the duplicate', () => {
        const dup = duplicateOrUnique([3, 6, 9, 2, 5, 8, 1, 4, 8, 7]);

        expect(dup).toEqual(8);
    });

    it('should find the unique', () => {
        const unique = duplicateOrUnique([9, 8, 7, 1, 2, 3, 9, 7, 1, 2, 3, 4, 4, 5, 5, 6, 6]);

        expect(unique).toEqual(8);
    });

    it('should find the duplicate', () => {
        const dup = duplicateOrUnique([1000, 300, 2, 40, 40]);

        expect(dup).toEqual(40);
    });
});