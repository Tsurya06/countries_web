# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

1. **Configure the top-level `parserOptions` property**:

    ```js
    export default tseslint.config({
      languageOptions: {
        // other options...
        parserOptions: {
          project: ["./tsconfig.node.json", "./tsconfig.app.json"],
          tsconfigRootDir: import.meta.dirname,
        },
      },
    });
    ```

2. **Replace `tseslint.configs.recommended`**:

    Replace it with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

3. **Optionally add stylistic rules**:

    Optionally add `...tseslint.configs.stylisticTypeChecked`.

4. **Install `eslint-plugin-react`**:

    Install the plugin and update the config:

    ```js
    // eslint.config.js
    import react from "eslint-plugin-react";

    export default tseslint.config({
      // Set the react version
      settings: { react: { version: "18.3" } },
      plugins: {
        // Add the react plugin
        react,
      },
      rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs["jsx-runtime"].rules,
      },
    });
    ```

## Running the Project

To run this project, follow these steps:

1. **Install dependencies**:

    ```sh
    npm install
    ```

2. **Install React 19 beta version**:

    ```sh
    npm install --save-exact react@rc react-dom@rc
    ```

3. **Start the development server**:

    ```sh
    npm run dev
    ```

4. **Build the project for production**:

    ```sh
    npm run build
    ```

5. **Preview the production build**:

    ```sh
    npm run preview
    ```

This project uses React 19 beta version. Make sure to install the exact versions of React and React DOM as specified above to avoid compatibility issues.