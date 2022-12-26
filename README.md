# FizzBuzz

## Installation

### Global Installation

```sh
npm install -g https://github.com/thombruce/fizzbuzz.git
```

### Project Installation

```sh
npm install https://github.com/thombruce/fizzbuzz.git
```

```js
const fizzbuzz = require('@thombruce/fizzbuzz')
```

## Usage

### JavaScript Usage

To return an array of standard rules FizzBuzz values from 1 to 100:

```js
fizzbuzz()
```

With options:

```js
fizzbuzz({ 3: 'Fizz', 5: 'Buzz', 13: 'Foo' }, -15, 500)
```

### Command Line Usage

Standard FizzBuzz from 1 to 100:

```sh
fizzbuzz
```

With options:

```sh
fizzbuzz --terms.3=Fizz --terms.5=Buzz --terms.13=Foo --from=-15 --to=500
```
