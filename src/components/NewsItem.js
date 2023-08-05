import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imgUrl,newsUrl,author,publishedAt} = this.props;
        return (
            <div className='my-2'>
                <div className="card">
                    <img src={!imgUrl ?`https://source.unsplash.com/random/?news` : imgUrl} className="card-img-top" alt=''/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text text-end'><small className="text-muted">By {author ? author :"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" className="btn btn-outline-dark btn-sm" target='_blank'>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem