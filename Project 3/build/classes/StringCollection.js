"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringCollection = (function () {
    function StringCollection(data) {
        this.data = data;
        this.data = data;
    }
    Object.defineProperty(StringCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    StringCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    StringCollection.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split('');
        var temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.data = characters.join('');
    };
    StringCollection.prototype.forEach = function (func) {
        func(this.data);
    };
    return StringCollection;
}());
exports.default = StringCollection;
