function twoSum(nums: number[], target: number): number[] {
  let firstNum = nums[0];
  let secondNum = nums[1];
  let result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (firstNum + secondNum === target) {
      result.push(nums.indexOf(firstNum), nums.indexOf(secondNum));
      return result;
    } else {
      firstNum = secondNum;
      secondNum = nums[i];
    }
  }
}

const numbers = [2, 7, 11, 15],
  goal = 9;

console.log(twoSum(numbers, goal));
