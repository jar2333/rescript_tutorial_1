// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Caml_obj = require("rescript/lib/js/caml_obj.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var Core__Array = require("@rescript/core/src/Core__Array.res.js");
var Core__Option = require("@rescript/core/src/Core__Option.res.js");

function test() {
  var arr = [
    1,
    2,
    3
  ];
  arr.push(4);
  var match = Core__Array.last(arr);
  if (match === 4) {
    console.log("mutable");
  } else {
    console.log("immutable");
  }
  var threes = Core__Array.make(3, "three");
  threes.forEach(function (prim) {
        console.log(prim);
      });
  var a = [
    1,
    2,
    3
  ];
  var b = [
    6,
    7,
    9
  ];
  var c = a.concat(b);
  var d = c.map(function (v) {
        return String(v) + ": " + "a".repeat(v);
      });
  console.log(d);
  var insertionSort = function (arr) {
    var n = arr.length;
    var j = {
      contents: 0
    };
    var key = {
      contents: 0
    };
    for(var i = 1; i < n; ++i){
      Core__Option.mapOr(arr[i], undefined, (function (v) {
              key.contents = v;
            }));
      j.contents = i - 1 | 0;
      while(j.contents >= 0 && Core__Option.mapOr(arr[j.contents], false, (function (v) {
                return v > key.contents;
              }))) {
        Core__Option.mapOr(arr[j.contents], undefined, (function (extra) {
                arr[j.contents + 1 | 0] = extra;
              }));
        j.contents = j.contents - 1 | 0;
      };
      arr[j.contents + 1 | 0] = key.contents;
    }
  };
  var unsorted_arr = [
    9,
    2,
    1,
    6,
    3,
    1,
    0,
    6,
    5
  ];
  console.log(unsorted_arr);
  insertionSort(unsorted_arr);
  console.log(unsorted_arr);
  var quickSort = function (arr) {
    if (arr.length <= 1) {
      return arr;
    }
    var pivot = arr[arr.length / 2 | 0];
    if (pivot === undefined) {
      return arr;
    }
    var pivot$1 = Caml_option.valFromOption(pivot);
    var left = arr.filter(function (e) {
          return Caml_obj.lessthan(e, pivot$1);
        });
    var middle = arr.filter(function (e) {
          return Caml_obj.equal(e, pivot$1);
        });
    var right = arr.filter(function (e) {
          return Caml_obj.greaterthan(e, pivot$1);
        });
    return quickSort(left).concat(quickSort(middle)).concat(quickSort(right));
  };
  var qs_arr = [
    6,
    1,
    4,
    2
  ];
  console.log(qs_arr);
  console.log(quickSort(qs_arr));
}

var name = "Arrays";

exports.name = name;
exports.test = test;
/* No side effect */
