/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  const hash = new Map(), N = cpdomains.length;
  if (N === 0) return [];
  for(let i = 0; i < N; i++) {
    const cpDomain = cpdomains[i];
    const sep = cpDomain.indexOf(' ');
    const count = +cpDomain.substr(0, sep);
    const domains = cpDomain.substr(sep+1).split('.');
    let M = domains.length;
    for(let j = M - 1; j >= 0; j--) {
      let domain = domains[j];
      if (j !== M) {
        domain = domains.slice(j).join('.');
      }
      if (!hash.has(domain)) {
        hash.set(domain, 0);
      }
      hash.set(domain, hash.get(domain) + count);
    }
  }
  const res = [];
  for (const [count, domain] of hash) {
    res.push(`${domain} ${count}`);
  }
  return res;
};

console.log(subdomainVisits(["9001 discuss.leetcode.com"]));
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));
