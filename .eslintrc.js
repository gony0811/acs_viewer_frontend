module.exports = {
  root: true,

  env: {
    node: true
  },

  plugins: ['vuetify'],

  extends: [
    'vuetify',
    'plugin:vue/recommended',
    'standard'
  ],

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    sourceType: 'module'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    // https://github.com/babel/babel-eslint/issues/681#issuecomment-420663038
    'template-curly-spacing': 'off',
    indent: 'off',
    //
    'no-unused-vars': 'warn'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
