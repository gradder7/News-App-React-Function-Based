import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const updateNews = async () => {
    // setting progess bar
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ae73228cd8a04eb194ee898b2eb0d7fb&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parseData = await data.json();
    props.setProgress(70);
    setArticle(parseData.articles);
    setTotalArticles(parseData.totalArticles);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalize(props.category)} - News Updates`;
    updateNews();
  }, []);

  const handleNextPage = async () => {
    setPage(page + 1);
    updateNews();
  };

  const handlePrevPage = async () => {
    setPage(page - 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    // for loader issue continue loading to solve  do this.state.page+1 in url
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=ae73228cd8a04eb194ee898b2eb0d7fb&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticle(article.concat(parseData.articles));
    setTotalArticles(parseData.totalResults);
  };

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <>
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        News Updates : Top Head Lines
      </h1>
      <h2 className="text-center mb-5">{capitalize(props.category)}</h2>
      {/* if it is true than show spinner */}
      {loading && <Spinner />}
      {/* ====== */}
      {/*   {/* loader with the infinite scroll indtalled component */}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalArticles}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {/* if loading than dont show content */}
            {/* previously for loader with next and prev button and fetch */}
            {/* {!this.state.loading &&
            this.state.article.map((element) => { */}
            {/* ========= */}
            {article.map((element, index) => {
              return (
                <div className="col-md-4" key={"Key" + index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : <></>}
                    description={
                      element.description ? (
                        element.description.slice(0, 90)
                      ) : (
                        <></>
                      )
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    colorSource={props.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* buttons */}
      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevPage}
          >
            Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalArticles / 21)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextPage}
          >
            Next
          </button>
        </div> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  page: PropTypes.number,
  category: PropTypes.string,
};

export default News;
