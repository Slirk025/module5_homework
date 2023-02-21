let arr = [15, true, "-", 1, "gbfg",2];
let odd = 0;
let even = 0;
let count = 0;
let zero = 0;

for(i=0;i<arr.length;i++){
num = typeof arr[i];
   if (num == "number"){
    count = arr[i] % 2;
  }
  else{
    even --;
  }
  if (count == 0){
    odd++;
  }
  else{
    even++;
  }
  if (arr[i] == 0){
    zero++;
    odd--;
  }
  else if (arr[i] == "null"){
    even--;
  }
}
console.log(`Четных ${odd}`);
console.log(`Нечетных ${even}`);
console.log(`Нулей ${zero}`);
