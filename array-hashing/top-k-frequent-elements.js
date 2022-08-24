/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let array = [];
    let result = [];
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }

    for (let [key, value] of map) {
        array.push([key, value]);
    }
    array.sort(function (a, b) {
        return b[1] - a[1];
    })

    for (let i = 0; i < k; i++) {
        result.push(array[i][0]);
    }
    return result;
};

console.log(topKFrequent([3, 1, 1, 1, 2, 3], 2));