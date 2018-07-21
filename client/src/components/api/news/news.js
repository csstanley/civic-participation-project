import React, { Component } from 'react';
import axios from 'axios';

// News API component // 
export default class News extends Component {

    state = {
        news: []
    };

    componentDidMount() {
        console.log("Mounting!!");

        axios({
            method: 'get',
            url: "https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=c45335a9de634b6988f9d7919e631172",
            // params: { 'api-key': "db1a7857294b42c296d0280bcca5ae36" },
        }
        ).then((res) => {
            console.log(res);
            console.log("This works!");

            this.setState({ news: res.data.articles });
            console.log(this.state.news);
        })

    }

    render() {
        console.log("Rendering!");

        return (
            <div>
                <div className="container">
                    {this.state.news.map((article, index) => (
                        // Map through the article array and return each index key // 
                        // The return must be packaged together, wrapped in a span or div tag // 
                        <span key={index} align="left">
                            <h3 className="newsArticles">"<a href={article.url}><b>{article.title}</b></a>." -- {article.source.name}</h3>
                            <p>{article.description}</p>
                            <hr></hr>
                        </span>
                    ))}
                </div>
            </div>
        )

    }
}
