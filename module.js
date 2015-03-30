/* Ryan Postma
 * CMP237
 * exam 2
 * problem 8 module.js
 */


//module to do iseven and over ten
(function(num) {
	var trueFalse = ["is even", "is odd", "is over ten", "is ten or under"];
	num.isEven = function(number) {
		if(number%2 == 0) {
			return trueFalse[0];
		}
		return trueFalse[1];
	};
	num.overTen = function(number) {
		if(number > 10){
			return trueFalse[2];
		}
		return trueFalse[3];
	};
})(this.mod = {});


//the four tests that are needed.
print(mod.isEven(6));
print(mod.isEven(123));
print(mod.overTen(50));
print(mod.overTen(1));


