/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
	let lo = 0, hi = S.length, res = [];
	for (let i = 0; i < S.length; i++) {
		if (S[i] === 'I') {
			res.push(lo++);
		} else {
			res.push(hi--);
		}
	}
	res.push(lo++);
	return res;
};

console.log(diStringMatch("IDID"));
