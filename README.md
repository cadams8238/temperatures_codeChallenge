# Weather History

This app allows you to get weather history data from the current date and all the previous 7 days from that date. You're able to search cities from all across the globe including:

- San Francisco, CA
- Amsterdam, Netherlands
- Oakland, CA
- Rome, Italy
- Cleveland, OH
- Tel Aviv, Israel
- New York City, NY
- Murmansk, Russia
- Istanbul, Turkey

---

## How to Set Up Locally

1. Clone repo into it's own directory and navigate into that directory
1. Install dev dependencies by running `npm install`
1. Set up .env file
   1. Create `.env` in root folder
   1. Create a variable for your API key from APIXU Weather API.
   - _Format like this:_ `REACT_APP_API_KEY=yourSecretKey`
1. To run app locally, (from the root folder in your terminal) run `npm start`
   - _This will open a tab in your browser and run the app on `localhost:3000`_
1. To run tests, run `npm test`
   - _A test report will be shown in your terminal_

## Technologies Used

- React
- Redux
- CSS Modules
- Moment
- Nivo
- Enzyme
- APIXU Weather API

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
