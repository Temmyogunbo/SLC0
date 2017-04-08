

(function(){
  'use strict';

  var jasmine = require('jasmine');

  var myApp = require('../app/library.js');

  describe("Determine the prime numbers from 0 to the input value: ", function() {

    describe("Case for valid arguments", function() {

      it("should return [2,3] for an input of 3", function() {
        expect(myApp.getPrimes(3)).toEqual([2,3]);
      });

      it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ] for an input 49", function() {
        expect(myApp.getPrimes(49)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]);
      });

      it("should return [] for an input of 0", function() {
        expect(myApp.getPrimes(0)).toEqual([]);
      });

      it("should return [] for an input of 1", function() {
        expect(myApp.getPrimes(1)).toEqual([]);
      });

      it("should return [2] for an input of 2", function() {
        expect(myApp.getPrimes(2)).toEqual([2]);
      });

      it("should return `Not a valid argument` for an input of `11o`", function() {
        expect(myApp.getPrimes('200')).toEqual('Not a valid argument');
      });

      it("should not return 1777 for an input of 10000", function() {
        expect(myApp.getPrimes(10000)).toContain(1777);
      });

      it("should not contain 49 for an input of 100", function() {
        expect(myApp.getPrimes(100)).not.toContain(49);
      });

      it("should contain 2053 for an input of 10000", function() {
        expect(myApp.getPrimes(10000)).toContain(2053);
      });

      it("should contain 7411 for an input of 10000", function() {
        expect(myApp.getPrimes(10000)).toContain(7411);
      });

    });
  });
})();