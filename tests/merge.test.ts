import merge from "../src/merge";

describe('testing merge function', () => {
    test('Case Success 1: collection_1 = [1,3], collection_2 = [2]', () => {
        expect(merge([1,3],[2])).toEqual([1,2,3])
    }),
    test('Case Success 2: collection_1 = [1,3], collection_2 = []', () => {
        expect(merge([1,3],[])).toEqual([1,3])
    }),
    test('Case Success 3: collection_1 = [], collection_2 = [2]', () => {
        expect(merge([],[2])).toEqual([2])
    }),
    test('Case Success 4: collection_1 = [], collection_2 = []', () => {
        expect(merge([],[])).toEqual([])
    }),
    test('Case Error 1: contain negative numbers', () => {
        try {
            merge([-1,3],[2])
        } catch(error) {
            expect(error).toEqual(new RangeError("Negative numbers are not allowed: " + [-1,3].join(', ')));
        }
    }),
    test('Case Error 2: contain negative numbers', () => {
        try {
            merge([1.5,3],[2])
        } catch(error) {
            expect(error).toEqual(new RangeError("Float numbers are not allowed: " + [1.5,3].join(', ')));
        }
    })
});