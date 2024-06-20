import antfu from '@antfu/eslint-config';

export default antfu({

   stylistic: {
      semi: true,
      indent: 3,
      quotes: 'single',
   },

   vue: {
      overrides: {
         'vue/html-self-closing': 'off',
      },
   },

   rules: {
      'no-console': 'off',
      'unused-imports/no-unused-imports': 'off',
   },

});
