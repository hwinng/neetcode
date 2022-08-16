/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 1);
        } else {
            map.set(s[i], map.get(s[i]) + 1)
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) {
            return false;
        } else {
            map.set(t[i], map.get(t[i]) - 1)
        }

        if (map.get(t[i]) === 0) {
            map.delete(t[i]);
        }
    }

    if (map.size === 0) {
        return true;
    }

    return false;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("cat", "rar"));