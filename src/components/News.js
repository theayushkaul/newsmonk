import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `News Monk - ${this.props.category !== 'general' ? this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) : "Get your daily dose of News here."} News`
    }

    async componentDidMount() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let element = await data.json();
        this.props.setProgress(70)
        this.setState({ articles: element.articles, totalResults: element.totalResults})
        this.props.setProgress(100)
    }

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let element = await data.json();
        setTimeout(() => {
        this.setState({ articles: this.state.articles.concat(element.articles), loading: false, page: this.state.page+1 })
        }, 500);
    };

    render() {
        return (
            <div className='my-4'>
                <h2 className='my-2 text-center bitter'>Top {this.props.category !== 'general' ? this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) : ""} News</h2>
                <InfiniteScroll 
                dataLength={this.state.articles.length} 
                next={this.fetchMoreData} 
                hasMore={this.state.articles.length !== this.state.totalResults} 
                loader={this.state.loading && <Spinner />}>
                    <div className="container">
                        <div className="row">
                            {
                                this.state.articles.map((element) => {
                                    return <div className="col-md-3" key={element.url}>
                                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News
