module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'import',
  ],
  settings: {
    'react': {
      'version': 'detect',
    },
    'import/resolver': {
      'typescript': {},
    },
  },
  rules: {
    // Error prevention
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-alert': 'warn',
    'no-unused-vars': 'off', // TypeScript handles this
    '@typescript-eslint/no-unused-vars': ['error', { 
      'argsIgnorePattern': '^_',
      'varsIgnorePattern': '^_',
    }],
    
    // Code style
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'semi': true,
      'tabWidth': 2,
      'trailingComma': 'es5',
      'printWidth': 100,
      'bracketSpacing': true,
      'arrowParens': 'avoid',
    }],
    
    // React
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/prop-types': 'off', // Use TypeScript for prop validation
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': ['error', { 
      'props': 'never', 
      'children': 'never' 
    }],
    
    // Import organization
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
      'alphabetize': { 'order': 'asc', 'caseInsensitive': true }
    }],
    'import/no-duplicates': 'error',
    
    // TypeScript specific
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
  overrides: [
    {
      // Test files
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.ts', '**/*.test.tsx'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};