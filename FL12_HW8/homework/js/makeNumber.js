function makeNumber(string) {
	let number = '';
	for (var i = 0; i < string.length; i++) {
		if(!isNaN(Number(string[i]))){
			number +=string[i]
		}
	} return number;
}
makeNumber('erer384jjjfd123');