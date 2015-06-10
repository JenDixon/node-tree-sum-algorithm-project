require('rootpath')();
var module = require('src/findLargestSum/findLargestSum');

var fs = require('fs');

var filename = "src/findLargestSum/small_triangle.txt";


var FindLargestSum = function() {
    module.find_max_sum(
    module.text_to_nested_array(
        module.new_data(filename, "utf8")));
};

FindLargestSum();


