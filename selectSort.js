function selectSort(array){

 function getMin(arr){
  return arr.reduce(function(a,b){
   return Math.min(a, b);
  })
 }

 for (var i = 0; i < array.length; i++){
  array.splice(i, 0,
   array.splice(
    array.indexOf(
     getMin(array.slice(i))), 1
   )
  );
 }

return array;
}
