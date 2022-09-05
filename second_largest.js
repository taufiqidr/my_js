function max(arr) {
    let res = arr[0]
    for (let i in arr) {
        if (arr[i] > res) {
            res = arr[i]
        }
    }
    return res;
}
function getSecondLargest(nums) {
    let res = []
    let max1 = max(nums)
    for (let i in nums) {
        if (nums[i] != max1) {
            res.push(nums[i])
        }
    }

    return max(res)

}