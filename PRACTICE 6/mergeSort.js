// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]



const nums1 = [1,2,3,0,0,0]
 
const nums2 = [2,5,6]

let m = nums1.length

let n = nums2.length
for(let i = m, j = 0; i < m+n ; i++, j++){

    nums1[i] = nums2[j]
}

nums1.sort((a,b)=>{
    return a - b
})


console.log(nums1)