import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsSection.css';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          apiKey: 'e1dea3a746ca4c1f9982a8b1824bbefc'
        }
      });
      
      setNews(response.data.articles.slice(0, 5));
    } catch (err) {
      console.log('News API error, using mock data');
      // Fallback to mock data if API fails
      setNews([
        {
          title: 'Major Tech Breakthrough in AI Development',
          description: 'Scientists announce significant progress in artificial intelligence research that could revolutionize various industries.',
          url: '#',
          publishedAt: new Date().toISOString(),
          source: { name: 'Tech News' }
        },
        {
          title: 'Global Climate Summit Addresses Environmental Challenges',
          description: 'World leaders gather to discuss urgent climate action and sustainable development goals.',
          url: '#',
          publishedAt: new Date(Date.now() - 3600000).toISOString(),
          source: { name: 'World News' }
        },
        {
          title: 'New Economic Policies Announced',
          description: 'Government introduces comprehensive economic reforms aimed at boosting growth and stability.',
          url: '#',
          publishedAt: new Date(Date.now() - 7200000).toISOString(),
          source: { name: 'Business Daily' }
        },
        {
          title: 'Healthcare Innovation Shows Promise',
          description: 'Breakthrough medical treatments demonstrate positive results in clinical trials.',
          url: '#',
          publishedAt: new Date(Date.now() - 10800000).toISOString(),
          source: { name: 'Health News' }
        },
        {
          title: 'Sports Championship Draws Record Viewership',
          description: 'Historic sports event captures global attention with unprecedented audience numbers.',
          url: '#',
          publishedAt: new Date(Date.now() - 14400000).toISOString(),
          source: { name: 'Sports Central' }
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleRefresh = () => {
    fetchNews();
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours === 1) return '1 hour ago';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  return (
    <div className="card news-card">
      <div className="card-header">
        <div className="card-icon news-icon">📰</div>
        <h2 className="card-title">Top Headlines</h2>
        <button className="refresh-button" onClick={handleRefresh} title="Refresh news">
          🔄
        </button>
      </div>
      
      {loading ? (
        <div className="loading">Loading latest news...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="news-list">
          {news.map((article, index) => (
            <div key={index} className="news-item">
              <div className="news-content">
                <h3 className="news-title">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h3>
                <p className="news-description">{article.description}</p>
                <div className="news-meta">
                  <span className="news-source">{article.source.name}</span>
                  <span className="news-time">{formatTime(article.publishedAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsSection; 