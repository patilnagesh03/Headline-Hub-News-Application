import React, { useState, useEffect } from "react";
import { Grid, Container, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const apikey = process.env.REACT_APP_NEWS_API_KEY;

const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    if (!string) return ""; // Handle empty or non-string inputs safely
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitalizeFirstLetter(props.category)} - HeadlineHub`;

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 9;
  const category = props.category;
  const setProgressBar = props.setProgressBar;

  const NewsAPI = async () => {
    setProgressBar(10); // Start progress bar at 10%
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    setProgressBar(50); // Update progress bar to 50% after fetching data
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setProgressBar(100); // Complete the progress bar after updating the state
  };

  useEffect(() => {
    NewsAPI();
    // eslint-disable-next-line
  }, [category]);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}&page=${
      page + 1
    }&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setPage(page + 1);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ margin: "35px 0px" }}>
        Top {capitalizeFirstLetter(props.category)} Headlines
      </Typography>

      {loading && <Spinner />}
      <>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults - 5}
          loader={<Spinner />}
        >
          <Grid container spacing={3}>
            {articles.map((article, index) => (
              <Grid item xs={9} sm={6} md={4} key={index}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  source={article.source.name}
                  author={article.author}
                  publishedAt={article.publishedAt}
                />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </>
    </Container>
  );
};

export default News;
