"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = __importDefault(require("./classes/NumberCollection"));
var StringCollection_1 = __importDefault(require("./classes/StringCollection"));
var LinkedlistCollection_1 = __importDefault(require("./classes/LinkedlistCollection"));
var Sorter = (function () {
    function Sorter(sortable) {
        this.sortable = sortable;
        this.sortable = sortable;
    }
    Sorter.prototype.sort = function () {
        var unsorted = this.sortable;
        var n = this.sortable.length;
        for (var i = 1; i < n; i++) {
            for (var j = 0; j < n - i; j++) {
                if (unsorted.compare(j, j + 1))
                    unsorted.swap(j, j + 1);
            }
        }
    };
    return Sorter;
}());
var numberCollection = new NumberCollection_1.default([1, 6, 3, 200, 50]);
var sorter1 = new Sorter(numberCollection);
sorter1.sort();
numberCollection.forEach(function (e) { return console.log(e); });
var stringCollection = new StringCollection_1.default('aaxxaXaXbccd');
var sorter2 = new Sorter(stringCollection);
sorter2.sort();
stringCollection.forEach(function (e) { return console.log(e); });
var linkedListCollection = new LinkedlistCollection_1.default();
linkedListCollection.add(100);
linkedListCollection.add(1);
linkedListCollection.add(200);
linkedListCollection.add(5);
linkedListCollection.add(300);
var sorter3 = new Sorter(linkedListCollection);
sorter3.sort();
linkedListCollection.forEach(function (e) { return console.log(e); });
