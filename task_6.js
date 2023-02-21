let arr = [1, 1, 1, 1, 0.5, 1];
let num=0;
for (i = 0; i < arr.length; i++){
  num+=arr[i];
}
let result = num % arr.length;
if (result == 0){
  console.log("true")
}
else{
  console.log("false")
}