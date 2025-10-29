export default {
  "*.{json,html}": ["prettier --write"],
  "*.{ts,tsx}": ["eslint --fix --max-warnings 0"],
};
