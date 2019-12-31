function makeNumber(string) {
	let number = '';
	for (var i = 0; i < string.length; i++) {
		if(!isNaN(Number(string[i]))){
			number +=string[i]
		}
	} return number;
}
function countNumbers(str) {
    const result = {};
	const objCountNumber = makeNumber(str);
		for (var i = 0; i < objCountNumber.length; i++) {
		objCountNumber[i] in result ? result[objCountNumber[i]] +=1 : result[objCountNumber[i]] =1;
	}
	return result;
}
countNumbers('jdjjka000466588kkkfs662555');
