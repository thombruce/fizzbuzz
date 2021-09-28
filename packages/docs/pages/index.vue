<template lang='pug'>
div.max-w-prose.m-auto
  div
    h3 Ruleset
    div(v-for='term in terms')
      .flex.flex-row.gap-x-4
        .form-control.flex-1
          label.label
            span.label-text Factor
          input.input.input-bordered(type='number' v-model='term.factor')
        .form-control.flex-grow
          label.label
            span.label-text Phrase
          input.input.input-bordered(type='text' v-model='term.phrase')
    button.btn(v-on:click='addTerm') Add Rule

  .flex.flex-row.gap-x-4
    .form-control.flex-1
      label.label
        span.label-text From
      input.input.input-bordered(type='number' v-model='from')
    .form-control.flex-1
      label.label
        span.label-text To
      input.input.input-bordered(type='number' v-model='to')

  ol
    li(v-for='val in fizzbuzz') {{ val }}
</template>

<script>
const FizzBuzz = require('@thombruce/fizzbuzz/packages/fizzbuzz')
export default {
  data () {
    return {
      terms: [
        { factor: 3, phrase: 'Fizz' },
        { factor: 5, phrase: 'Buzz' }
      ],
      from: 1,
      to: 100
    }
  },
  computed: {
    objectTerms () {
      return this.terms.reduce(
        (obj, item) => Object.assign(obj, { [item.factor]: item.phrase }),
        {}
      )
    },
    fizzbuzz () {
      return FizzBuzz(this.objectTerms, this.from, this.to)
    }
  },
  methods: {
    addTerm () {
      this.terms.push({ factor: null, phrase: '' })
    }
  }
}
</script>