#!/usr/bin/node
const arg = Number(process.argv[2]);
if (!arg) {
  console.log('Missing number of occurrences');
}
for (let i = 0; i < arg; i++) {
  console.log('C is fun');
}
