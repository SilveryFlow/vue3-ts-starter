/** @type {import('lint-staged').Configuration} */
export default {
  '**/*.{js,ts,vue,jsx,tsx}': [
    'eslint --fix',
    'prettier --write --experimental-cli',
    'cspell --no-exit-code --no-must-find-files',
  ],
  '**/*.{css,scss,html,json}': [
    'prettier --write --experimental-cli',
    'cspell --no-exit-code --no-must-find-files',
  ],
  '**/*.md': ['prettier --write --experimental-cli'],
}
