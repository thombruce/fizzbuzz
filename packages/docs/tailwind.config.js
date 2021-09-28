module.exports = {
  purge: {
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'plugins/**/*.{js,ts}',
      'content/**/*.md',
      '../**/*.vue',
      '../../node_modules/@thombruce/**/*.vue',
    ]
  },
}
