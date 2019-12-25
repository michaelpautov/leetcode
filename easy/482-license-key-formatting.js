/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  const raw  = S.replace(/-/g, '').toUpperCase()
  let length = raw.length, chunks = [];
  while (length > 0) {
    chunks.push(raw.substring(length - K, length));
    length -= K;
  }
  return chunks.reverse().join('-');
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4) === "5F3Z-2E9W");
console.log(licenseKeyFormatting('2-5g-3-J', 2));

/*

  I should slice string by the end
  then if latest iterate not equal K
  I just update latest

*/
