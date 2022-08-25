/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let mySet = new Set();
    let longestStreak = 0;

    for (let num of nums) {
        mySet.add(num);
    }

    console.log(mySet)
    mySet.forEach(num => {
        // assume that 
        if (mySet.has(num + 1)) {
            console.log("num", num)
            let currentNumber = num;
            let currentStreak = 1;
            while (mySet.has(currentNumber + 1)) {
                currentNumber += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
            console.log(currentStreak)
        }
    });

    return longestStreak;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))