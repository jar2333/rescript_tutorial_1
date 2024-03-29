// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Js_exn = require("rescript/lib/js/js_exn.js");
var Caml_exceptions = require("rescript/lib/js/caml_exceptions.js");
var Js_snippetsJs = require("./js_snippets.js");
var Caml_js_exceptions = require("rescript/lib/js/caml_js_exceptions.js");

function someJsFunctionThatThrows(prim) {
  Js_snippetsJs.someJsFunctionThatThrows();
}

var ExampleException = /* @__PURE__ */Caml_exceptions.create("Exceptions.ExampleException");

var CustomException = /* @__PURE__ */Caml_exceptions.create("Exceptions.CustomException");

function test() {
  var exn1 = function (count) {
    if (count < 0) {
      throw {
            RE_EXN_ID: CustomException,
            Error: new Error()
          };
    }
    console.log("Count: " + count.toString());
  };
  try {
    exn1(-1);
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.RE_EXN_ID === CustomException) {
      console.log("Caught exception!");
    } else {
      throw exn;
    }
  }
  var wrap = function (count) {
    var val;
    try {
      val = exn1(count);
    }
    catch (raw_exn){
      var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
      if (exn.RE_EXN_ID === CustomException) {
        console.log("Yes exception!");
        return ;
      }
      throw exn;
    }
    console.log("No exception!");
  };
  wrap(1);
  wrap(-1);
  try {
    throw {
          RE_EXN_ID: ExampleException,
          _1: "Big error",
          Error: new Error()
        };
  }
  catch (raw_s){
    var s = Caml_js_exceptions.internalToOCamlException(raw_s);
    if (s.RE_EXN_ID === ExampleException) {
      console.log("Exception caught: " + s._1);
    } else {
      throw s;
    }
  }
  var catch_js = function (f) {
    try {
      return f();
    }
    catch (raw_obj){
      var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
      if (obj.RE_EXN_ID === Js_exn.$$Error) {
        var m = obj._1.message;
        if (m !== undefined) {
          console.log("Caught a JS exception! Message: " + m);
          return ;
        } else {
          return ;
        }
      }
      throw obj;
    }
  };
  catch_js(someJsFunctionThatThrows);
  catch_js(function () {
        Js_exn.raiseError("JS Exception from ReScript!!");
      });
}

var name = "Exceptions";

exports.someJsFunctionThatThrows = someJsFunctionThatThrows;
exports.ExampleException = ExampleException;
exports.CustomException = CustomException;
exports.name = name;
exports.test = test;
/* ./js_snippets.js Not a pure module */