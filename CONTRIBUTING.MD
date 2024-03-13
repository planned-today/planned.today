# Contributing

If you wish to contribute to the planned.today codebase or documentation, feel free to fork the repository and submit a pull request. We use ESLint and Prettier to enforce a consistent coding style, so having that set up in your editor of choice is a great boon to your development process.

# Code structure

The codebase is divided into two parts:

1. The application is located in the `root` directory.
2. The documentation is located in the `docs` directory.

> Navigate to the respective directory to work on either the docs or the application.

## Contributing to the application

1. Fork & clone the repository, and make sure you're on the main branch
2. `npm install --save-dev` in the root directory install the frontend dependencies
3. Run `npm run dev` to start the development server and preview changes locally
4. Code your heart out!
5. Push your changes to your fork and submit a pull request (Make sure you follow the [conventional commit format](COMMIT_CONVENTION.MD))

## Contributing to the documentation

1. Fork & clone the repository, and make sure you're on the main branch
2. `cd docs` to navigate to the documentation directory (note: all changes related to docs will be made in the `docs` directory only)
3. Run `npm install --save-dev` to install the documentation dependencies
4. Run `npm run dev` to start the development server and preview changes locally
5. Code your heart out!
6. Push your changes to your fork and submit a pull request (Make sure you follow the [conventional commit format](COMMIT_CONVENTION.MD))
