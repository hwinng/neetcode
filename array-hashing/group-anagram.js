/**
 * @param {string[]} strs
 * @return {string[][]}
 * with n is length of strs
 * m is length of each word in strs
 * => f(n) = O(n * max(m) * log(max(m)))
 */
var groupAnagrams = function (strs) {
    if (!strs.length) {
        return [[""]]
    }

    const result = [];
    const map = new Map();

    for (let i = 0; i < strs.length; i++) { // O(n)
        const sortedStr = strs[i].split('').sort().join(''); // O(max(m)) * O(log(max(m)))
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(strs[i])
        } else {
            map.set(sortedStr, [strs[i]])
        }
    }

    for (let [_, value] of map) {
        result.push(value)
    };

    return result
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))