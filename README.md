# Personal Site
A simple `React.js` web application for [https://zachwieand.com](https://zachwieand.com).
Includes a little blurb about myself as well as links to my GitHub, LinkedIn,
Resume, and Email Address.

### Features
- Built with [Create React App](https://github.com/facebook/create-react-app)
- Hosted on GitHub Pages
- CI/CD with GitHub Actions
- Dependency Management with Dependabot
- Automerge PR branches on pipeline success and codeowner approval (with label `automerge`)

### Development
- `make build` - Builds the docker images and installs all node dependencies
- `make run` - Starts the development server. Can be accessed at `localhost:3000`
- `make lock` - Locks the `package-lock.json` after updating `package.json`
- `make bundle` - Builds a production bundle at `build/`
