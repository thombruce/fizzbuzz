#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const terms = argv.terms || {
  3: 'Fizz',
  5: 'Buzz'
}
const from = isNaN(argv.from) ? 1 : argv.from
const to = isNaN(argv.to) ? 100 : argv.to

for (i = from; i <= to; i++) {
  let phrase = ''
  for (const factor in terms) {
    if (i % factor == 0) { phrase += terms[factor] }
  }
  if (phrase == '') { phrase += i }
  console.log(phrase)
}
