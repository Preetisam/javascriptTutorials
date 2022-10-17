unction randomPiviot(array){
 for (let i = 0; i < array.length - 1; i++){
   let minIndex = i;
   for (let j = i; j < array.length; j++) {
    if (array[j] > array[minIndex]){
        minIndex = j;
    }
   }
    const temp = array[i];
    array[i] = array[minIndex];
array[minIndex] = temp;
 }
return array;
}
randomPiviot([ 2 , 8 , 9, 40, 32]);
