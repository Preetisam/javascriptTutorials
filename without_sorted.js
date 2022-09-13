
function arrangeOnesAndZeros(arr, size)
{
    let type0 = 0;
    let type1 = size - 1;
     
    while (type0 < type1)
    {
        if (arr[type0] == 1)
        {
             if (arr[type1] != 1)
            {  
              // Swap
              arr[type1] = arr[type1] + arr[type0];
              arr[type0] = arr[type1] - arr[type0];
              arr[type1] = arr[type1] - arr[type0];
             }
            type1--;
        }
        else
            type0++;
    }
}
 

let arr = [ 0, 1, 0, 1, 1, 1 ];
let i, arr_size = arr.length;
 
arrangeOnesAndZeros(arr, arr_size);
for(i = 0; i < arr_size; i++)
   console.log(arr[i])
  
