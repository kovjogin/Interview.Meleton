module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  vueIndentScriptAndStyle: true,
  trailingComma: 'none',

  overrides: [
    {
      'files': '*.vue',
      'options': {
        'parser': 'vue'
      }
    }
  ]
};
