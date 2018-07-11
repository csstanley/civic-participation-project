import React,{Component} from 'react';
import axios from 'axios';

// Do the JS function to put search entries into the var search //
// Import that .js file // 

// NYTimes News API component // 
export default class News extends Component {

    state = {
        articles: []
    };

    componentDidMount() {
        console.log("Mounting!!");
        
        axios({
            method: 'get',
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            params: { 'api-key': "db1a7857294b42c296d0280bcca5ae36" },
        }
    ).then((res) => {
        console.log(res);
        console.log("This works!");

        this.setState({ articles : res.data.response.docs });
        console.log(this.state.articles);
    })
            
    }

    render() {
        console.log("Rendering!");
        
        return (
            <div> 
                <div className="container">
                {this.state.articles.map((article, index) => (
                    // Map through the article array and return each index key // 
                    // The return must be packaged together, wrapped in a span or div tag // 
                <span key={index}>
                   <h1>{article.headline.main}</h1>
                   <h2><a href={article.web_url}>(Click Here to Read More)</a></h2>
                </span>
                ))}    
                </div>
            </div>
        )        
//     // }
        
}
}