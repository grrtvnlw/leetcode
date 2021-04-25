function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let firstNum = nums[i];
    for (let j = 1; j < nums.length; j++) {
      let secondNum = nums[j];
      if (firstNum + secondNum === target && i !== j) {
        const result = [i, j];
        return result;
      }
    }
  }
}
