let map = new Map();
map.set(1 , "Первый");
map.set(2 , "Второй");
map.set(3 , "Третий");
map.set(4 , "Четвертый");
for (let keys of map.keys()){
  console.log(`Ключ — ${keys}, значение — ${map.get(keys)}`)
}