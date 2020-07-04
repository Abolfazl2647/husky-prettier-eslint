module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb','prettier','prettier/react','react-app','plugin:react/recommended', 'jest-enzyme'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    "no-param-reassign": [2, { "props": false }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
// module.exports = {
//   "extends": [
//     "react-app",
//     "airbnb",
//     "plugin:jsx-a11y/recommended",
//     "prettier",
//     "prettier/react"
//   ],
//   "plugins": [
//     "jsx-a11y",
//     "prettier"
//   ],
//   "rules": {
//     "semi": 0,
//     "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
//     "prettier/prettier": [
//       "error", {
//         "semi": false
//       }
//     ]
//   }
// }