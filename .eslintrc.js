module.exports = {
    root: true,
    env: {
      es6: true,
      browser: true,
      node: true,
    },
    // 'plugin:react/recommended', 'jest-enzyme'
    extends: ['airbnb','prettier','prettier/react','react-app'],
    plugins: ['react','babel', 'import', 'jsx-a11y', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      "import/resolver": {
        "node": {
          "paths": ["src"]
        }
      },
    },
    rules: {
      "no-underscore-dangle": 0,
      'prettier/prettier': ['error'],
      "no-restricted-imports": [
        "error",
        {
          "patterns": ["@material-ui/*/*/*", "!@material-ui/core/test-utils/*"]
        }
      ],
      "react/prop-types": 0,
      "no-param-reassign": [2, { "props": false }],
      "react/jsx-no-duplicate-props": [2,{ "ignoreCase": false}],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "import/no-extraneous-dependencies": ["error",  {"devDependencies": true}],
      "react/jsx-props-no-spreading": "off",
      'linebreak-style': 'off', // Don't play nicely with Windows.
      'arrow-parens': 'off', // Incompatible with prettier
      'object-curly-newline': 'off', // Incompatible with prettier
      'no-mixed-operators': 'off', // Incompatible with prettier
      'arrow-body-style': 'off', // Not our taste?
      'function-paren-newline': 'off', // Incompatible with prettier
      'no-plusplus': 'off',
      'space-before-function-paren': 0, // Incompatible with prettier
  
      'max-len': ['error', 150, 2, { ignoreUrls: true, }], // airbnb is allowing some edge cases
      'no-console': 'error', // airbnb is using warn
      'no-alert': 'error', // airbnb is using warn
  
      'no-param-reassign': 'off', // Not our taste?
      "radix": "off", // parseInt, parseFloat radix turned off. Not my taste.
  
      'react/require-default-props': 'off', // airbnb use error
      'react/forbid-prop-types': 'off', // airbnb use error
      // 'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
  
      'prefer-destructuring': 'off',
  
      'react/no-find-dom-node': 'off', // I don't know
      'react/no-did-mount-set-state': 0,
      'react/no-did-update-set-state': 0,
      // "react/no-did-mount-set-state": [1,0],
      'react/no-unused-prop-types': 'off', // Is still buggy
      'react/jsx-one-expression-per-line': 'off',
  
      "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
      "jsx-a11y/label-has-for": [2, {
          "required": {
              "every": ["id"]
          }
      }], // for nested label htmlFor error
    },
  };
