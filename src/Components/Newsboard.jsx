import React, { useEffect, useState } from 'react';
import Newsitems from './Newsitems';

export default function Newsboard() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles);
            })
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div>
            <h2 className='text-center'>Latest <span className="badge text-bg-danger">News</span></h2>
            <div className="container">
                <div className="row">
                    {articles.map((news, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <Newsitems
                                title={news.title}
                                description={news.description}
                                imageUrl={news.urlToImage}
                                url={news.url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
