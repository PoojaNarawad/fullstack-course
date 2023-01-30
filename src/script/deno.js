function printNumber(n) {
	if (n === 0) {
		return;
	} else {
		printNumber(n - 1);
	}
	return n;
}
printNumber(10);
