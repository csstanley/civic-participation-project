import React,{Component} from 'react';
import axios from 'axios';

// Do the JS function to put search entries into the var query //
// Import that .js file // 

// NYTimes News API component // 
export default class News extends Component {

    state = {
        articles: []
    };

    componentDidMount() {
        console.log("mounting!!");
        
        axios({
            method: 'get',
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            params: { 'api-key': "db1a7857294b42c296d0280bcca5ae36" },
        }
    ).then(function (response) {
        // body = JSON.parse(response);
        console.log(response);
        console.log("This works!");


        // this.setState({ articles: articles });
        // console.log("state".this.state.articles);

    })
            
    }

    render() {
        console.log("Rendering!");
        
        return (
            <div className="container2">
            
                <div className="container1">
                    {this.state.articles.map((article) => {
                        return (
                            <div key={article.id}>
                                <h1>Article info can go here...</h1>
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        )
    }
}