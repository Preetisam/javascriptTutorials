/*Requirements: "1. Given an array. You need to find a triplet that will be having sum as a target. A Triplet is a set of 3 numbers.
Input - [3,6,5,2,10]
Target - 11
Output - [3,6,2]
*/
function printTriplets(arr, n) {
    let found = false;
    for(let i = 0; i < n; i++) {
        let left = i + 1;
        let right = n -1;

        while(left <= right) {
            let tripletSum = arr[i] + arr[left] + arr[right];
            if(tripletSum == 0) {
                console.log(`The triplets are ${arr[i]} ${arr[left]} ${arr[right]}`)
                left++;
                right--;
                found = true;
            } else if(tripletSum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    if(!found) {
        console.log("No triplet found")
    }

}

let arr = [3,6,5,2,10]
printTriplets(arr, arr.length);
