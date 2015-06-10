"use strict";

var new_data = function (filename, config) {
  var fs = require('fs');
  return fs.readFileSync(filename, config);
};

var find_max_value = function(values, row, col) {
  return Math.max(values[row][col], values[row][col + 1]);
};

var string_to_num_array = function(lines, i) {
  return lines[i].split(' ').map(function(item){return parseInt(item, 10)});
};

var text_to_nested_array = function(text) {
  var lines = text.replace(/\n\s/g, '\n').replace(/\s/, '').split('\n');
  var output = [];
  for(var i = 0; i < lines.length; i++) {
    var line = string_to_num_array(lines, i);
    if (typeof line[i] === 'number'){output.push(line)}
  }
  return output;
};

var find_max_sum = function(values) {
  for(var row = values.length - 1; row >= 0; row-- ){
    for (var col = 0; col < row; col++) {
      console.log("\nCurrent value: ", values[row][col]);
      console.log("Parent: ", values[row - 1][col]);

      values[row - 1][col] += find_max_value(values, row, col);

      console.log("Checking cell: ",[row],[col], "vs ", [row],[col + 1]);
      console.log("Comparing values: ", values[row][col], "vs", values[row][col + 1]);
      console.log("Current value + parent = Current Sum: ", values[row - 1][col]);
    }
  }
  console.log("\nLargest Sum: ", values[0][0]);
  return values[0][0];
};

var _export = {
  new_data: new_data,
  find_max_value: find_max_value,
  string_to_num_array: string_to_num_array,
  text_to_nested_array: text_to_nested_array,
  find_max_sum: find_max_sum
}
module.exports = _export;