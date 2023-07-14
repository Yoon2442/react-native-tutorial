module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "**/*/*.js",
    "*.js",
    "*.svg",
    "*.json",
    "*.png",
    "package.json",
    "package-lock.json",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "import",
    "react",
    "react-native",
    "prettier",
    "react-hooks",
    "@typescript-eslint",
    "promise",
    "unused-imports",
  ],
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".d.ts",
          ".android.js",
          ".android.jsx",
          ".android.ts",
          ".android.tsx",
          ".ios.js",
          ".ios.jsx",
          ".ios.ts",
          ".ios.tsx",
          ".web.js",
          ".web.jsx",
          ".web.ts",
          ".web.tsx",
        ],
      },
    },
  },
  rules: {
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "import/extensions": [
      "error",
      "never",
      {
        svg: "always",
        model: "always",
        style: "always",
        png: "always",
        jpg: "always",
        json: "always",
        constant: "always",
      },
    ],
    "react-hooks/exhaustive-deps": [
      "error",
      { additionalHooks: "(useMemoOne)" },
    ],
    "max-len": ["error", 120],
    "@typescript-eslint/ban-ts-comment": 2,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": 0,
    "import/no-extraneous-dependencies": 2,
    "import/no-named-as-default-member": 2,
    "import/order": 0,
    "import/no-duplicates": 2,
    "import/no-useless-path-segments": 2,
    "import/no-cycle": 2,
    "import/prefer-default-export": 0,
    "import/no-anonymous-default-export": 0,
    "import/named": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "import/namespace": 0,
    "import/default": 0,
    "import/no-named-as-default": 0,
    "import/no-unused-modules": 0,
    "import/no-deprecated": 0,
    "@typescript-eslint/indent": 0,
    "react-hooks/rules-of-hooks": 2,
    // "jest/no-identical-title": 2,
    // "jest/valid-expect": 2,
    "unused-imports/no-unused-imports": 2,
    "unused-imports/no-unused-vars": 2,
    camelcase: 2,
    "prefer-destructuring": 2,
    "no-nested-ternary": 2,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
