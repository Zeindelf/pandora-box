module.exports = {
  "extends": [
    '@pandora-box/eslint-config-typescript',
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  "plugins": [
    "react",
    "jsx-a11y",
  ],
  rules: {
    // Using Typescript instead
    "react/prop-types": "off",
    "react/require-default-props": "off",
    // Disabled on NextJS projects
    "react/react-in-jsx-scope": "off",
    // Can create components with func/const
    "react/function-component-definition": "off",
    // Allow comp. props as spreading object
    "react/jsx-props-no-spreading": "off",
    // Organize components props
    "react/sort-prop-types": ["error", { "callbacksLast": true }],
    "react/jsx-sort-props": ["error", { "callbacksLast": true }],
    // Hooks default
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    // Allow nested and siblings label to ref id
    "jsx-a11y/label-has-associated-control": [2, {
      "required": { "some": ["nesting", "id"] }
    }],
  },
};
