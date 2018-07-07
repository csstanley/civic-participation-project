import React, { Component } from 'react';

// Do the JS function to put search entries into the var query //
// Import that .js file // 

const search = searchQuery =>
'https://api.nytimes.com/svc/search/v2/articlesearch.json' + query + $.param({
  'api-key': "db1a7857294b42c296d0280bcca5ae36"});

// NYTimes News API component // 
class News extends Component {
    constructor() {
        this.state = {
            articles: [].
        };
    }

    componentDidMount() {

        fetch(search)
        .then(res => {
            return res.json();
        }).then(data => {
            let articles = data.res.map(article) => {
                return(
                    <div key={article.results}>
                    </div>
                )
            })
            this.setState({articles: articles});
            console.log("state". this.state.articles);
        })
}

    render() {
        return(
           <div className="container2">
                <div className="container1">
                {this.state.articles}
                </div>
            </div>
        )
    }

// request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': "db1a7857294b42c296d0280bcca5ae36",
//     'q': "Politics, Government, Senate, House Representatives, Supreme Court, President, Election, Democrat, Republican",
//     'fq': "The New York Times",
//     'sort': "newest",
//     'fl': "headline, web_url, lead_paragraph, keyword, pub_date",
//     'hl': "true"
//   },
// }, function(err, response, body) {
//   body = JSON.parse(body);
//   console.log(body);
// })