"use strict";
// class Sorter {
//   constructor(public collection: number[] | string) { }
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
var numberCollection = new NumberCollection_1.NumberCollection([1, 2, -5, 0, -6, 10]);
var characterCollection = new CharacterCollection_1.CharacterCollection('Xaaayb');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(300);
linkedList.add(800);
numberCollection.sort();
console.log(numberCollection.data);
characterCollection.sort();
console.log(characterCollection.data);
// const sorter = new Sorter(linkedList)
// sorter.sort()
// console.log(sorter.collection) 
