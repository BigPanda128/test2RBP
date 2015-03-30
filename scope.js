/*Ryan POstma
 * CMP237
 * exam 2
 * scope.js problem 1
 */

//two global varialbes
var global = 6;
var localScope = 10;//this one shows the same name as the local variable

//this shows the local scope variable
function local() {
	var localScope = 5;
	return localScope;
}


print(global);//prints out the global
print(localScope);//prints out the global
print(local());//prints out the local variable in the function which is different than the global varialbe
