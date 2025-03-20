# React + TypeScript + Vite

This project is a template that provides a minimal setup to get React working with Vite, TypeScript, and HMR (Hot Module Replacement). It also includes some ESLint rules for code quality and consistency.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A fast build tool and development server.
- **HMR**: Hot Module Replacement for faster development.
- **ESLint**: Configured with rules to ensure code quality and consistency.

## Plugins

This template supports two official Vite plugins for React:

1. [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
2. [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint Configuration

For production applications, it is recommended to enable type-aware lint rules for better code quality. Below is an example configuration:

### Type-Aware ESLint Configuration

```js
// eslint.config.js
export default tseslint.config({
  extends: [
    // Replace ...tseslint.configs.recommended with one of the following:
    ...tseslint.configs.recommendedTypeChecked, // Recommended type-aware rules
    ...tseslint.configs.strictTypeChecked, // Stricter rules for better type safety
    ...tseslint.configs.stylisticTypeChecked, // Optional stylistic rules
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'], // Specify your TypeScript config files
      tsconfigRootDir: import.meta.dirname, // Set the root directory for TypeScript configs
    },
  },
})
```

### Adding React-Specific ESLint Plugins

You can enhance your linting setup by adding React-specific plugins:

1. [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x): Provides additional lint rules for React.
2. [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom): Adds lint rules for React DOM.

Example configuration:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX, // React-specific lint rules
    'react-dom': reactDom, // React DOM-specific lint rules
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules, // Recommended TypeScript rules for React
    ...reactDom.configs.recommended.rules, // Recommended rules for React DOM
  },
})
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

## Folder Structure

```
chatbot/
├── src/                # Source code
├── public/             # Static assets
├── tsconfig.app.json   # TypeScript configuration for the app
├── tsconfig.node.json  # TypeScript configuration for Node.js
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [ESLint Documentation](https://eslint.org/)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
