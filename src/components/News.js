import { useState, useEffect } from 'react';
import React from 'react';
import NewsItem from './NewsItem';
import Sippner from './Sippner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    useEffect(() => {
        document.title = `${capitalize(props.category)} - ReportRealm`;
        updateNews();
        // eslint-disable-next-line
    },[]);

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1); // Capitalize the first letter and concatenate it with the rest of the string
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);

        let parseData = await data.json();
        props.setProgress(70);

        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setPage(1)
        setLoading(false)
        props.setProgress(100);
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults); 
    };

    return (
        <>
            <h1 className='text-center' style={{ margin: '67px 0' }}>ReportRealm - Top {capitalize(props.category)} Headlines</h1>
            {loading && <Sippner />}
            <InfiniteScroll style={{ margin: '4px 14px' }}
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Sippner/>}
                endMessage={<p style={{ textAlign: 'center' }}>No more articles to load.</p>}
            >
                <div className='container my-3'>
                    <div className="row my-5 mx-3">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title?.length >= 45 ? element.title.slice(0, 45) : ""}
                                    description={element.description?.length >= 88 ? element.description.slice(0, 88) : element.description}
                                    imgUrl={element.urlToImage}
                                    url={element.url}
                                    publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;
