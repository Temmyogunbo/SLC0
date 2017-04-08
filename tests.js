// testing code goes here

'use strict'

var jasmine = require('jasmine');

var myApp = require('../app/library.js');



describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 6", function() {
    expect(myApp.fizzBuzz(6)).toEqual('Fizz');
  });

  it("should return `Buzz` for number divisible by 10 ", function() {
    expect(myApp.fizzBuzz(10)).toEqual('Buzz');
  });

  it("should return `FizzBuzz` for 30", function() {
    expect(myApp.fizzBuzz(30)).toEqual('FizzBuzz');
  });

  it("should return `FizzBuzz` for 60", function() {
    expect(myApp.fizzBuzz(60)).toEqual('FizzBuzz');
  });

  it("should return `FizzBuzz` for 300", function() {
    expect(myApp.fizzBuzz(300)).toEqual('FizzBuzz');
  });

  it("should return `Fizz` for 126", function() {
    expect(myApp.fizzBuzz(126)).toEqual('Fizz');
  });

  it("should return 11 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(11)).toEqual(11);
  });

  it("should return 1001 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(1001)).toEqual(1001);
  });

  it("should return Fizz for 3 ", function() {
    expect(myApp.fizzBuzz(3)).toEqual("Fizz");
  });

  it("should return Buzz for 5 ", function() {
    expect(myApp.fizzBuzz(5)).toEqual("Buzz");
  });


});

