# Alerts in Ukraine

Client library for retrieving active alerts in Ukraine from [alerts.in.ua](https://alerts.in.ua/). The library is written in TypeScript and can be used in both TypeScript and JavaScript projects.

## API Documentation

The API documentation is available at [https://devs.alerts.in.ua/](https://devs.alerts.in.ua/).

## Installation

To install the library, use the following command:

```bash
npm install alerts-ua
```

## Usage

To use the library, use the following code:

### TypeScript

```typescript
import { AlertsClient } from 'alerts-ua';

// Create an instance of the AlertsClient with your API token
const client = new AlertsClient('your-api-token');

// Call the getActiveAlerts method to retrieve the list of active alerts
client
  .getActiveAlerts()
  .then((alerts) => {
    // Process the list of active alerts
    console.log('Active Alerts:', alerts);
  })
  .catch((error) => {
    // Handle any errors that occurred during the API request
    console.error('Error:', error.message);
  });

// Call the getLocations method to retrieve the list of locations
console.log(client.getLocations());

// Call the getLocation method to retrieve the location by ID
console.log(client.getLocation('10'));
```

Replace `'your-api-token'` with your actual API token.

### JavaScript

```javascript
const { AlertsClient } = require('alerts-ua');

// Create an instance of the AlertsClient with your API token
const client = new AlertsClient('your-api-token');

// Call the getActiveAlerts method to retrieve the list of active alerts
client
  .getActiveAlerts()
  .then((alerts) => {
    // Process the list of active alerts
    console.log('Active Alerts:', alerts);
  })
  .catch((error) => {
    // Handle any errors that occurred during the API request
    console.error('Error:', error.message);
  });

// Call the getLocations method to retrieve the list of locations
console.log(client.getLocations());

// Call the getLocation method to retrieve the location by ID
console.log(client.getLocation('10'));
```

Replace `'your-api-token'` with your actual API token.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
