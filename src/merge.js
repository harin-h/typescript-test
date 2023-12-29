"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(collection_1, collection_2) {
    if (collection_1.filter(function (num) { return num < 0; }).length > 0) {
        throw (new RangeError("Negative numbers are not allowed: " + collection_1.join(', ')));
    }
    else if (collection_2.filter(function (num) { return num < 0; }).length > 0) {
        throw (new RangeError("Negative numbers are not allowed: " + collection_2.join(', ')));
    }
    else if (collection_1.filter(function (num) { return parseInt(num.toString()) != num; }).length > 0) {
        throw (new RangeError("Float numbers are not allowed: " + [1.5, 3].join(', ')));
    }
    else if (collection_2.filter(function (num) { return parseInt(num.toString()) != num; }).length > 0) {
        throw (new RangeError("Float numbers are not allowed: " + collection_2.join(', ')));
    }
    var index_1 = 0;
    var index_2 = 0;
    var ans = [];
    try {
        while (index_1 < collection_1.length || index_2 < collection_2.length) {
            if (index_1 < collection_1.length && index_2 < collection_2.length) {
                if (collection_1[index_1] <= collection_2[index_2]) {
                    ans.push(collection_1[index_1]);
                    index_1 += 1;
                }
                else {
                    ans.push(collection_2[index_2]);
                    index_2 += 1;
                }
            }
            else if (index_1 < collection_1.length) {
                ans.push(collection_1[index_1]);
                index_1 += 1;
            }
            else {
                ans.push(collection_2[index_2]);
                index_2 += 1;
            }
        }
    }
    catch (error) {
        throw new Error("Internal logic function problem");
    }
    return ans;
}
exports.default = merge;
