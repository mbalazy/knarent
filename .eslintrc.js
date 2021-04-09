module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // the TypeScript parser we installed earlier
  parserOptions: {
    ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
  },
  extends: [
    "eslint:recommended", // eslint default rules
    "plugin:@typescript-eslint/eslint-recommended", // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended", // eslint react rules (github.com/yannickcr/eslint-plugin-react)
    "plugin:jsx-a11y/recommended", // accessibility plugin
    // Prettier plugin and recommended rules
    "plugin:prettier/recommended",
  ],
  rules: {
    // Include .prettierrc.js rules
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/prop-types": "off",
  },
};
