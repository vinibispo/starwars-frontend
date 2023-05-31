# Star Wars Frontend

This is a Star Wars App that uses ViteJS, and TypeScript. This app consumes the [Star Wars Backend API](https://github.com/vinibispo/starwars-backend)


## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v20 or later)
- yarn (v1.22.19 or later)

## Getting Started

Follow the steps below to get the application up and running on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/vinibispo/starwars-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd starwars-frontend
   ```

3. Install the dependencies:

   ```bash
   yarn --frozen-lockfile
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

   This will start the development server and your app will be accessible at [http://localhost:5173](http://localhost:5173).

## Available Scripts

In the project directory, you can run the following scripts:

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the production-ready app in the `dist` directory.
- `yarn preview`: Serves the production build locally for testing.
- `yarn lint`: Runs the ESLint linter to check for code issues.
- `yarn type-check`: Runs the TypeScript Check for code issues.

## Project Structure

The project structure follows the standard setup of a ViteJS project with TypeScript:

```terminal
├── index.html
├── package.json
├── public
│   └── _redirects
├── src
│   ├── app.tsx
│   ├── assets
│   │   ├── background.jpg
│   │   ├── character.svg
│   │   ├── film.svg
│   │   ├── planet.png
│   │   ├── planet.svg
│   │   ├── star-wars-theme-song.mp3
│   │   ├── star.svg
│   │   ├── wallpaper.png
│   │   └── wars.svg
│   ├── hooks
│   │   ├── characters.ts
│   │   ├── films.ts
│   │   ├── planets.ts
│   │   └── user.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── characters
│   │   │   ├── id.tsx
│   │   │   └── index.tsx
│   │   ├── films
│   │   │   ├── id.tsx
│   │   │   └── index.tsx
│   │   ├── home
│   │   │   └── index.tsx
│   │   ├── planets
│   │   │   ├── id.tsx
│   │   │   └── index.tsx
│   │   └── users
│   │       ├── forgot-password.tsx
│   │       ├── reset-password.tsx
│   │       ├── shared
│   │       │   └── form.ts
│   │       ├── signin.tsx
│   │       └── signup.tsx
│   ├── resources
│   │   ├── api.ts
│   │   ├── schema
│   │   │   ├── characters.ts
│   │   │   ├── films.ts
│   │   │   ├── planets.ts
│   │   │   └── user.ts
│   │   └── storage.ts
│   ├── router.tsx
│   ├── shared
│   │   ├── card.tsx
│   │   ├── contexts
│   │   │   └── auth-context.tsx
│   │   ├── layout.tsx
│   │   ├── navbar.tsx
│   │   ├── pagination
│   │   │   ├── arrow-left.tsx
│   │   │   ├── arrow-right.tsx
│   │   │   └── index.tsx
│   │   └── styles.ts
│   ├── ui
│   │   ├── container.ts
│   │   ├── sign-in.tsx
│   │   └── styles
│   │       ├── global.ts
│   │       └── sign-out.tsx
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```
You can modify and extend the project structure to suit your needs.

## Learn More

To learn more about the technologies used in this project, refer to the official documentation:

- [React](https://reactjs.org/)
- [ViteJS](https://vitejs.dev/) 
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest/docs/react/overview)
- [StitchesJS](https://stitches.dev/)
- [React Hook Form](https://react-hook-form.com)

## License

This project is licensed under the [MIT License](LICENSE.md).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

---
