const defaultTerms = {
  3: 'Fizz',
  5: 'Buzz'
}
const defaultFrom = 1
const defaultTo = 100

module.exports = function (terms = defaultTerms, from = defaultFrom, to = defaultTo) {
  let values = []

  for (i = from; i <= to; i++) {
    let phrase = ''
    for (const factor in terms) {
      if (i % factor == 0) { phrase += terms[factor] }
    }
    if (phrase == '') { phrase += i }
    values.push(phrase)
  }

  return values
}
