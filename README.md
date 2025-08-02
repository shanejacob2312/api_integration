# News & Weather Dashboard

A responsive web application that dynamically fetches and displays real-time news headlines and weather information from public APIs. Built with React, the application provides a modern, user-friendly interface for staying informed about current events and weather conditions.

## Features

- **Real-time News Headlines**: Fetches top headlines from NewsAPI.org
- **Live Weather Data**: Displays current weather information from WeatherAPI.com
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Interface**: Refresh buttons and location search functionality
- **Modern UI**: Clean, gradient-based design with smooth animations
- **Error Handling**: Graceful fallback to mock data when APIs are unavailable

## Technologies Used

- **Frontend Framework**: React 18.2.0
- **HTTP Client**: Axios for API requests
- **Styling**: CSS3 with responsive design principles
- **APIs**: 
  - NewsAPI.org for news headlines
  - WeatherAPI.com for weather data

## Prerequisites

Before running this application, you need to:

1. **Node.js** (version 14 or higher)
2. **npm** or **yarn** package manager
3. **API Keys** for the following services:
   - [NewsAPI.org](https://newsapi.org/) - Free tier available
   - [WeatherAPI.com](https://www.weatherapi.com/) - Free tier available

## Installation

1. **Clone or download the project files**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure API Keys**:
   
   Open the following files and replace the placeholder API keys with your actual keys:
   
   - `src/components/NewsSection.js` - Line 15: Replace `'YOUR_API_KEY_HERE'` with your NewsAPI key
   - `src/components/WeatherSection.js` - Line 18: Replace `'YOUR_WEATHERAPI_KEY_HERE'` with your WeatherAPI.com key

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## API Configuration

### NewsAPI.org Setup

1. Visit [NewsAPI.org](https://newsapi.org/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Replace the placeholder in `NewsSection.js`

### WeatherAPI.com Setup

1. Visit [WeatherAPI.com](https://www.weatherapi.com/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Replace the placeholder in `WeatherSection.js`

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Application header component
│   ├── Header.css         # Header styles
│   ├── NewsSection.js     # News headlines component
│   ├── NewsSection.css    # News section styles
│   ├── WeatherSection.js  # Weather data component
│   └── WeatherSection.css # Weather section styles
├── App.js                 # Main application component
├── App.css               # Main application styles
├── index.js              # React entry point
└── index.css             # Global styles
```

## Features in Detail

### News Section
- Displays top 5 headlines from the United States
- Shows article title, description, source, and publication time
- Clickable links to full articles
- Refresh functionality to get latest news
- Responsive design with hover effects

### Weather Section
- Current weather conditions for any city worldwide
- Default location: Kochi, Kerala, India
- Temperature, humidity, wind speed, and pressure
- Weather icons based on conditions
- Location search functionality
- Real-time data updates

### Responsive Design
- Desktop: Two-column layout
- Tablet: Stacked layout with optimized spacing
- Mobile: Single-column layout with touch-friendly elements

## Customization

### Changing Default Weather Location

To change the default weather location, edit `src/components/WeatherSection.js`:

```javascript
const [location, setLocation] = useState('Your City Name');
const fetchWeather = async (city = 'Your City Name') => {
```

### Adding New APIs
To integrate additional APIs:

1. Create a new component in the `components/` directory
2. Follow the existing pattern for API calls and error handling
3. Add the component to the dashboard grid in `App.js`

### Styling Modifications
- Global styles: `src/index.css`
- Component-specific styles: Individual `.css` files
- Main layout: `src/App.css`

### API Endpoints
The application is configured to use:
- News: `https://newsapi.org/v2/top-headlines`
- Weather: `http://api.weatherapi.com/v1/current.json`

## Troubleshooting

### Common Issues

1. **API Errors**: Ensure your API keys are correctly configured and have sufficient quota
2. **CORS Issues**: The application uses public APIs that should handle CORS properly
3. **Network Errors**: Check your internet connection and API service status

### Development Tips

- Use browser developer tools to monitor API requests
- Check the console for error messages
- Verify API keys are working with direct API calls

## Deployment

To build the application for production:

```bash
npm run build
```

This creates a `build/` directory with optimized files ready for deployment to any static hosting service.

## License

This project is open source and available under the MIT License.

## Support

For issues related to:
- **NewsAPI**: Visit [NewsAPI.org support](https://newsapi.org/docs)
- **WeatherAPI.com**: Visit [WeatherAPI.com support](https://www.weatherapi.com/docs/)
- **React**: Visit [React documentation](https://reactjs.org/docs/) 