const fs = require('fs');

// https://github.com/okonet/lint-staged/issues/829#issuecomment-631563134
// eslint-disable-next-line consistent-return
const generateTSConfig = (stagedFilenames) => {
  try {
    const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
    tsconfig.include = stagedFilenames;
    fs.writeFileSync('tsconfig.lint.json', JSON.stringify(tsconfig));

    return 'tsc --noEmit --project tsconfig.lint.json';
  } catch (e) {
    console.log('error: ', e);
  }
};

module.exports = {
  'src/**/*.css': ['stylelint --fix'],
  '*.{js,jsx,ts,tsx}': ['eslint --ext .js,.jsx,.ts,.tsx --fix', generateTSConfig],
};
