/** @type {import('lint-staged').Configuration} */
export default {
  '**/*.{js,ts,vue,jsx,tsx}': ['eslint --fix', 'oxfmt', 'cspell --no-exit-code --no-must-find-files'],
  '**/*.{css,scss,html,json}': ['oxfmt', 'cspell --no-exit-code --no-must-find-files'],
  '**/*.md': ['oxfmt'],
}
