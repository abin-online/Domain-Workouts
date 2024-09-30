const nums = [1,2,3,1,2,3]
let k =2
console.log(nums.length);

var containsNearbyDuplicate = function(nums, k) {

    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j< nums.length; j++){

            if(nums[i]===nums[j]){
                console.log(j-i) 
            }
        }
    }
    
};

console.log(containsNearbyDuplicate(nums, k))