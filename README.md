## aggretsuko Mini Project

[SEE DEMO](https://aggretsuko.vercel.app/)

![Vercel](https://vercelbadge.vercel.app/api/ichadw/aggretsuko)

## Requirements (recommended)
- node `^16.x.x`
- yarn `^1.22.x`

1. **Install Node.js**: Our app is powered by [Node.js](https://nodejs.org/en/). We recommend you to install Node.js using [nvm](https://github.com/nvm-sh/nvm).
2. **Install yarn**: See [the yarn documentation](https://yarnpkg.com/getting-started/install) for instructions on installing it with your OS.

## Running the service locally
1. Run these command to start the project
```bash
$ yarn install    # install all the deps (first time only, if there's no dep update)
$ yarn dev        # start the service on local
```
2. Open `localhost:3000` on your default browser and login to access the full website capability

## Project Structure
```sh
src/                                # Main Source Directory
├── __data_mocks__                  # Data Mock API
├── __mocks__                       # Mock Function
├── __tests__                       # Unit Tests
├── api                             # All API Needed
├── components                      # All Page Components
├── context                         # Project's Context
├── pages                           # All Pages Existed in this Project
├── styles                          # Global Styles
└── utils                           # Global Utils
```

## Supported Library
- HTTP Request: [cross-fetch](https://www.npmjs.com/package/cross-fetch/)
- Unit Testing: [jest](https://jestjs.io/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!