"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = require("./merge");
var cases = [
    { collection_1: [1, 3], collection_2: [2] },
    { collection_1: [1, 3], collection_2: [] },
    { collection_1: [], collection_2: [2] },
    { collection_1: [], collection_2: [] }
];
for (var i = 0; i < cases.length; i++) {
    console.log("Case ", (i + 1), " : collection_1 = ", cases[i].collection_1, " , collection_2 = ", cases[i].collection_2);
    console.log("Result = ", (0, merge_1.default)(cases[i].collection_1, cases[i].collection_2));
}
