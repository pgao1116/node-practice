const unroll = require("./unroll");

describe("#unroll", function () {
    it("is a function", function () {
        expect(typeof unroll).toEqual("function");
    });

    it("returns correct output for 3x3 matrix", function () {
        const input = [
            ["a", "b", "c"],
            ["d", "e", "f"],
            ["g", "h", "i"]
        ];
        const output = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
        expect(unroll(input)).toEqual(output);
    });

    it("returns correct output for 5x5 matrix", function () {
        const input = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]
        ];
        const output = [
            1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21,
            16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13
        ];
        expect(unroll(input)).toEqual(output);
    });
});
