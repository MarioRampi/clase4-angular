const list = [
  'A',
  'P',
  'A',
  'A',
  'P',
  'A',
  'P',
  'A',
  'A',
  'P',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'P',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'P',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'P',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'P',
  'A',
  'A',
  'P',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'P',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'P',
  'A',
  'A',
  'P',
  'P',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'P',
  'P',
  'A',
  'P',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'P',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'A',
  'P',
  'P',
  'A',
  'A',
  'P',
  'A',
];
console.time();
const a = list.reduce((prev, value) => value == 'A' ? prev + 1 : prev, 0);
console.timeEnd();
console.time();
const b = list.reduce((prev, value) => value == 'P' ? prev + 1 : prev, 0);
console.timeEnd();

console.time();
var total = 0;
var n = list.length;
for (let i = 0; i < n; i++) {
  const element = list[i];
  total += element == 'A' ? 1 : 0;
}
console.timeEnd();
console.log(total);
console.log(a);
console.log(b);
