/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let maxCount = 0;
  let commonWord;
  let hash = {};
  let bannedSet = new Set(banned);
  let word = '';
  for(let i = 0; i < paragraph.length; i++) {
    const char = paragraph[i].toLowerCase();
    if (!isLetter(char)) {
      if (hash[word]) {
        hash[word]++;
      } else {
        hash[word] = 1;
      }
      if (word && !bannedSet.has(word) && maxCount < hash[word]) {
        maxCount = hash[word];
        commonWord = word;
      }
      word = '';
    } else {
      word += char
    }
  }
  return commonWord || word;
};

function isLetter(c) {
  return !!c.match(/[a-z]/);
}

console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ['a']) === 'b');

console.log(mostCommonWord('BOB', []) === 'bob');
console.log(mostCommonWord("j. t? T. z! R, v, F' x! L; l! W. M; S. y? r! n; O. q; I? h; w. t; y; X? y, p. k! k, h, J, r? w! U! V; j' u; R! z. s. T' k. P? M' I' j! y. P, T! e; X. w? M! Y, X; G; d, X? S' F, K? V, r' v, v, D, w, K! S? Q! N. n. V. v. t? t' x! u. j; m; n! F, V' Y! h; c! V, v, X' X' t? n; N' r; x. W' P? W; p' q, S' X, J; R. x; z; z! G, U; m. P; o. P! Y; I, I' l' J? h; Q; s? U, q, x. J, T! o. z, N, L; u, w! u, S. Y! V; S? y' E! O; p' X, w. p' M, h! R; t? K? Y' z? T? w; u. q' R, q, T. R? I. R! t, X, s? u; z. u, Y, n' U; m; p? g' P? y' v, o? K? R. Q? I! c, X, x. r' u! m' y. t. W; x! K? B. v; m, k; k' x; Z! U! p. U? Q, t, u' E' n? S' w. y; W, x? r. p! Y? q, Y. t, Z' V, S. q; W. Z, z? x! k, I. n; x? z; V? s! g, U; E' m! Z? y' x? V! t, F. Z? Y' S! z, Y' T? x? v? o! l; d; G' L. L, Z? q. w' r? U! E, H. C, Q! O? w! s? w' D. R, Y? u. w, N. Z? h. M? o, B, g, Z! t! l, W? z, o? z, q! O? u, N; o' o? V; S! z; q! q. o, t! q! w! Z? Z? w, F? O' N' U' p? r' J' L; S. M; g' V. i, P, v, v, f; W? L, y! i' z; L? w. v, s! P?",
    ["m", "q", "e", "l", "c", "i", "z", "j", "g", "t", "w", "v", "h", "p", "d", "b", "a", "r", "x", "n"]) === 'y');
