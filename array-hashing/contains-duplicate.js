/**
 * @param {number[]} nums
 * @return {boolean}
 */
// function containsDuplicate(nums) {
//     const res = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (!res[nums[i]]) {
//             res[nums[i]] = 1;
//         } else {
//             res[nums[i]] += 1;
//         }

//         if (res[nums[i]] > 1) return true;

//     }

//     return false;
// };

// Solution 2
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    const mySet = new Set();
    
    for (let num of nums) {
        if (mySet.has(num)) {
            return true;
        }
        mySet.add(num);
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.log(containsDuplicate([1, 2, 3, 4]))