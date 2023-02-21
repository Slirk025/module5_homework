let x = undefined;
let type = typeof x;
if (type == "number"){
  console.log(`${x} - число`);
}
else if (type == "boolean"){
  console.log(`${x} - логический тип`);
}
else if (type == "string"){
  console.log(`${x} - строка`);
}
else{
  console.log(`Тип ${x} не определен`);
}