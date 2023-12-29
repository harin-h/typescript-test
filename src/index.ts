import merge from "./merge";

type Case = {
    collection_1: number[];
    collection_2: number[];
};

let cases:Case[] = [
    {collection_1:[1,3],collection_2:[2]},
    {collection_1:[1,3],collection_2:[]},
    {collection_1:[],collection_2:[2]},
    {collection_1:[],collection_2:[]}
]

for (let i = 0; i < cases.length ; i ++) {
    console.log("Case ",(i+1)," : collection_1 = ",cases[i].collection_1," , collection_2 = ",cases[i].collection_2)
    console.log("Result = ",merge(cases[i].collection_1,cases[i].collection_2))
}