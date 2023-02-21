let number = prompt("Введите число");
let type = typeof +number;
let count = number % 2;
if (isNaN(number) || type !== "number"){
  console.log("Упс, кажется, вы ошиблись")
}
else if (count == 0){
  console.log("Число четное")
}
else {
  console.log("Число не четное")
}
