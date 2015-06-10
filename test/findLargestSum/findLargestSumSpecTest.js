"use strict";

require('rootpath')();
var module = require('src/findLargestSum/findLargestSum');

describe("findLargestSum", function() {

        describe("find_max_sum", function(){
        var test_array = [ [ 9 ], [ 2, 1 ], [ 1, 5, 7 ], [ 9, 5, 3, 3 ] ];

        it("should log progress of computing the max sum of adjacent array elements and return the max sum", function() {
            expect(module.find_max_sum(test_array)).toEqual(21);
        });
    });

    describe("text_to_nested_array", function() {
        var text =  ' 9\n 2 1\n 1 5 7\n 9 5 3 3\n';
        var text2 =  ' 9\n 2 1\n 1 5 7\n 9 5 3 3\n';

        it("should convert space delimited lines of ints to a nested array of ints", function() {
            expect(module.text_to_nested_array(text)).toEqual([ [ 9 ], [ 2, 1 ], [ 1, 5, 7 ], [ 9, 5, 3, 3 ] ]);
        });
    });

    describe("find_max_value", function(){
        var test_array = [[3,5]];

        it("should return the maximum values between adjacent array elements", function() {
            expect(module.find_max_value(test_array,0,0)).toEqual(5);
        });
    });
});
