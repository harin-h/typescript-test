function merge(collection_1: number[], collection_2: number[]) : number[] | Error{

    if (collection_1.filter(num=>num<0).length > 0) {
        throw (new RangeError("Negative numbers are not allowed: " + collection_1.join(', ')));
    } else if (collection_2.filter(num=>num<0).length > 0) {
        throw (new RangeError("Negative numbers are not allowed: " + collection_2.join(', ')));
    } else if (collection_1.filter(num=>parseInt(num.toString())!=num).length > 0) {
        throw (new RangeError("Float numbers are not allowed: " + [1.5,3].join(', ')));
    } else if (collection_2.filter(num=>parseInt(num.toString())!=num).length > 0) {
        throw (new RangeError("Float numbers are not allowed: " + collection_2.join(', ')));
    }

    let index_1: number = 0
    let index_2: number = 0
    let ans: number[] = []

    try {
        while (index_1<collection_1.length || index_2<collection_2.length) {
            if (index_1<collection_1.length && index_2<collection_2.length) {
                if (collection_1[index_1]<=collection_2[index_2]) {
                    ans.push(collection_1[index_1])
                    index_1 += 1
                } else {
                    ans.push(collection_2[index_2])
                    index_2 += 1
                }
            } else if (index_1<collection_1.length) {
                ans.push(collection_1[index_1])
                index_1 += 1
            } else {
                ans.push(collection_2[index_2])
                index_2 += 1 
            }
        }
    } catch (error) {
        throw new Error("Internal logic function problem");
    }

    return ans;
}

export default merge;