/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i=0, j=0;
    let nums3=[];
    let median = -1;
    let totalLength = nums1.length + nums2.length;
    let count=100;
    while(i<nums1.length && j<nums2.length){
        if(nums1[i] < nums2[j]){
            console.log(' Pushing ', nums1[i]);
            nums3.push(nums1[i]);
            i++;
        }
        else if(nums2[j] <= nums1[i]){
            console.log(' Pushing ', nums2[j]);
            nums3.push(nums2[j]);
            j++;
        }
        console.log("Array Size", nums3.length, 'Total Length/2',Math.floor(totalLength/2));
        if(count++ > 100){
            console.log('Breaking loop');
            //break;
        }
    }
    //Push remaining elements of nums1 or nums2
    while(i<nums1.length){
        console.log(' Pushing ', nums1[i]);
        nums3.push(nums1[i]);
        i++;
    }
    while(j<nums2.length){
        console.log(' Pushing ', nums2[j]);
        nums3.push(nums2[j]);
        j++;
    }
    return nums3;
};
let r=findMedianSortedArrays([3],[2]);

//console.log(Math.floor((1+2)/2));