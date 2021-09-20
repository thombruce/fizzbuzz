#!/usr/bin/env node

const terms = {
  3: 'Fizz',
  5: 'Buzz'
}
const from = 1
const to = 100

for (i = from; i <= to; i++) {
  let phrase = ''
  for (const factor in terms) {
    if (i % factor == 0) { phrase += terms[factor] }
  }
  if (phrase == '') { phrase += i }
  console.log(phrase)
}
