let twoSumLessThanK = function (A, K) {
    let ans = -1;
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] + A[j] < K) {
                ans = Math.max(ans, A[i] + A[j]);
            }
        }
    }

    return ans;
}
console.log(twoSumLessThanK([34, 23, 1, 24, 75, 33, 54, 8], 60))

// Given an array A of integers and integer K, retum the maximum S such that there exists i < j with AM An] = S and S < K If no such!, j exist satisfying this equation, return -1
// Example 1:
// Input: A = [34,23,1,24,75,33,54,8], K = 50 Output: 58
// Explanation: We can use 34 and 24 to sum 58 which is less than 60 and there's no pair th sum 0159 Therefore, the maximum sum is 58
// Example 2:
// Input: A = [10,20,30], K = 15 Output: -1
// Explanation: In this case it's not possible to get a pair sum less than 15
// Constraints: 0 1 <= A length <= 100 0 1 <= A[i] <= 1000 0 1 c K c 20005 
