# Netlify Deployment Guide

## Prerequisites

1. **Netlify Account**: Sign up at [netlify.com](https://netlify.com)
2. **GitHub Repository**: Your code should be pushed to GitHub
3. **API Keys**: Ensure your API keys are configured

## Deployment Methods

### Method 1: Deploy via Netlify UI (Recommended)

1. **Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with your GitHub account

2. **Connect Repository**
   - Click "New site from Git"
   - Choose "GitHub" as your Git provider
   - Select your repository: `shanejacob2312/api_integration`

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: `18` (or latest LTS)

4. **Environment Variables** (Optional)
   - Go to Site settings > Environment variables
   - Add your API keys if needed:
     - `REACT_APP_NEWS_API_KEY`: Your NewsAPI key
     - `REACT_APP_WEATHER_API_KEY`: Your WeatherAPI.com key

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=build
   ```

### Method 3: Drag and Drop

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag the `build` folder** to [netlify.com/drop](https://netlify.com/drop)

## Post-Deployment

### Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings

### Environment Variables
If you want to use environment variables instead of hardcoded API keys:

1. **Create `.env` file** (for local development):
   ```
   REACT_APP_NEWS_API_KEY=your_news_api_key
   REACT_APP_WEATHER_API_KEY=your_weather_api_key
   ```

2. **Update the code** to use environment variables:
   ```javascript
   // In NewsSection.js
   apiKey: process.env.REACT_APP_NEWS_API_KEY
   
   // In WeatherSection.js
   key: process.env.REACT_APP_WEATHER_API_KEY
   ```

3. **Add to Netlify**:
   - Site settings > Environment variables
   - Add the variables with your actual API keys

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check the build logs in Netlify
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **API Errors**
   - Check if API keys are correctly set
   - Verify API quotas haven't been exceeded
   - Test APIs directly

3. **CORS Issues**
   - WeatherAPI.com and NewsAPI.org should handle CORS
   - If issues persist, contact API providers

### Performance Optimization

The `netlify.toml` file includes:
- **Asset optimization**: CSS/JS minification and bundling
- **Image compression**: Automatic image optimization
- **Redirects**: SPA routing support
- **Pretty URLs**: Clean URL structure

## Monitoring

- **Analytics**: Enable Netlify Analytics in site settings
- **Forms**: Netlify can handle form submissions
- **Functions**: Serverless functions if needed later

## Security

- **HTTPS**: Automatically enabled by Netlify
- **Headers**: Configure security headers in `netlify.toml`
- **Environment Variables**: Keep API keys secure

## Updates

To update your deployed site:
1. Push changes to your GitHub repository
2. Netlify will automatically rebuild and deploy
3. Or trigger manual deployment from Netlify dashboard

## Support

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **React Deployment**: [cra.link/deployment](https://cra.link/deployment)
- **Netlify Support**: [netlify.com/support](https://netlify.com/support) 