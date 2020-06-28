 
module.exports = {
    linters: {
      '**/*.+(js|md|ts|css|yml|yaml|json)': [
        'eslint --fix',
        'prettier --write',
        // 'jest --findRelatedTests',
        'git add',
      ],
    },
  };