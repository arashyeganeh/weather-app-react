# Weather App React

<p>
    <img alt="react" src="https://img.shields.io/badge/-React-45b8d8?logo=react&logoColor=white"/>
    <img alt="javascript" src="https://img.shields.io/badge/-JavaScript-EBD64D?logo=javascript&logoColor=white"/>
    <img alt="antdesign" src="https://img.shields.io/badge/-Ant%20Design-ff757e?logo=antdesign&logoColor=white"/>
    <img alt="sass" src="https://img.shields.io/badge/-Sass-C55F92?logo=SASS&logoColor=white"/>
</p>

This is a weather application built with React that fetches and displays weather data using the 'WeatherAPI.com' integration. With this app, users can check the current weather and forecast for various locations.

## Installation and Setup

Before you begin, make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Create a file named `config.js` inside the `src` folder.
4. In the `config.js` file, add the following content:

```js
export const API_URL = "http://api.weatherapi.com/v1";
export const API_TOKEN = process.env.API_TOKEN || "<API_TOKEN>";
```

5. Replace `<API_TOKEN>` with your actual WeatherAPI.com API token. If you don't have one, you can sign up for a free account and get your API token from [WeatherAPI.com](https://www.weatherapi.com/).

6. Save the `config.js` file.

7. To start the development server and run the application, use the following command:

   ````bash
   npm install
   npm start
   ````

   This will launch the app in your default web browser, and you can interact with it to view weather information.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Starts the development server and opens the app in your default browser.
- `npm build`: Builds the app for production deployment.
- `npm test`: Launches the test runner to execute unit tests.
- `npm eject`: Ejects the app and provides access to advanced configuration options.

## Dependencies

This project relies on the following dependencies:

- `@testing-library/jest-dom`: Jest DOM utilities for testing.
- `@testing-library/react`: Testing utilities for React components.
- `@testing-library/user-event`: Utilities for simulating user events in tests.
- `antd`: A popular React UI library.
- `react`: The core React library.
- `react-dom`: React DOM rendering.
- `react-scripts`: Configuration and scripts for Create React App.
- `sass`: The Sass stylesheet language.
- `web-vitals`: Metrics to measure website performance.

## Development Dependencies

Additionally, the project uses the following development dependencies:

- `react-router-dom`: React bindings for handling navigation and routing.

## Supported Browsers

The app supports the following browsers:

- Production: >0.3%, last 5 versions, not dead
- Development: last 1 Chrome version, last 1 Firefox version, last 1 Safari version

## Author

This weather app was created by Arash Yeganeh.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.
