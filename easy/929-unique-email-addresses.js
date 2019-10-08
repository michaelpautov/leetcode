/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const hashSet = new Set();
  const l = emails.length;
  for( let i = 0; i < l; i++) {
    const word =  emails[i];
    const j = word.indexOf('@');
    let local = word.substr(0, j);
    const rest = word.substr(j);
    if (local.includes('+')) {
      local = local.substr(0, local.indexOf('+'));
    }
    local = local.replace(/\./g,'');
    hashSet.add(local + rest);
  }
  return hashSet.size;
};
