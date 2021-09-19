#!/usr/bin/env node

for (i = 1; i <= 100; i++) {
  let phrase = ''
  if (i % 3 == 0) { phrase += 'Fizz' }
  if (i % 5 == 0) { phrase += 'Buzz' }
  if (phrase == '') { phrase += i }
  console.log(phrase)
}
