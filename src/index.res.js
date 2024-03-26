// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Let = require("./scripts/Let.res.js");

function MakeRunnable(M) {
  var run = function () {
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    console.log("Running test: " + M.name);
    M.test();
    console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  };
  return {
          run: run
        };
}

function run() {
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
  console.log("Running test: " + Let.name);
  Let.test();
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
}

var L = {
  run: run
};

run();

exports.MakeRunnable = MakeRunnable;
exports.L = L;
/*  Not a pure module */
