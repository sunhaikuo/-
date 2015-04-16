function testBlock(a) {
	function foo() {};
	foo.prototype.z = 3;

	var obj = new foo();
	obj.x = 1;
	obj.y = 2;
	console.log(obj.z);
	console.log('z' in obj);
}