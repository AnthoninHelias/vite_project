import {increment} from "./increment";

describe('test increment function', () => {
    test('test increment function', () => {
        expect(increment(1)).toBe(2);
        expect(increment(2)).toBe(3);
        expect(increment(3)).toBe(4);
    });
});
