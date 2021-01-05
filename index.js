// Code your solutions in this file
function writeCards (names, event) {
  let results = []
  for (let x = 0; x < names.length; x++) {
    results.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
  }
  return results
}

function countDown (number) {
  while (number >=0) {
    console.log(number)
    number--
  }
}