import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = ({ searchTerm }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey1 = '3d0ab2706140439e96fa67e27e28993d';
      const apiKey2 = 'c4a8f4bbbf3b4acdacc94cce2b8fa875';
      const apiUrl1 = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey1}`;
      const apiUrl2 = `https://api.worldnewsapi.com/search-news?api-key=${apiKey2}&text=${searchTerm}`;
      let result;

      try {
        result = await axios(apiUrl1);
        setArticles(result.data.articles);
      } catch (error1) {
        if (error1.response.status === 429) {
          try {
            result = await axios(apiUrl2);
            setArticles(result.data.articles);
          } catch (error2) {
            console.log(error2);
          }
        } else {
          console.log(error1);
        }
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
    {articles && articles.length > 0 && articles.map((article) => (
      <div key={article.title}>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </div>
    ))}
  </div>

   /* <div>
      {articles.map((article) => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );*/
  )
};

export default News;
