import {moveZeros} from "../moveZeros/moveZeros.js";

describe('moveZeros', () => {
    it('should move zeros to the end of array', () => {
        const zeros = moveZeros([1, 0, 1, 0, 1, 0]);

        expect(zeros).toEqual([1, 1, 1, 0, 0, 0]);

    });

    it('should move zeros to the end even undefined, null or other not number value exist in array', () => {
        const zeros = moveZeros([1, null, false, 0, true, 0, 'abs', 32, undefined, 1, 3, 12]);

        expect(zeros).toEqual([1, null, false, true, 'abs', 32, undefined, 1, 3, 12, 0, 0]);
    });

    it('should return {message: "no zeros"} if there are no zeroes in array', () => {
        const zeros = moveZeros([1, null, false, true, 'abs', 32, undefined, 1, 3, 12]);

        expect(zeros).toEqual('no zeros found');
    });
});