import React from 'react';

// Do the JS function to put search entries into the var query //
// Import that .js file // 

const search = searchQuery =>
'https://api.nytimes.com/svc/search/v2/articlesearch.json' + query + $.param({
  'api-key': "db1a7857294b42c296d0280bcca5ae36"});

// NYTimes News API component // 
class News extends Component {
    constructor() {


        this.state = {
            /* The '.' after the [] is giving you an error. */
            articles: [].
        };
    }

    componentDidMount() {

        fetch(search)
        .then(res => {
            /* What is your reason for passing the data to another .then fucntion as opposed to just doing the mapping here? */
            return res.json();

        }).then(data => {
            /* What's your goal here? What does 'data.res' give you if you console.log it? */

            /* Your map has a bug in it. This is how it should look:

            let article = data.res.map((article) => {
                return(
                    <div key={article.results}>
                    </div>
                )
            })

            BUT THIS IS NOT VERY KOSHER!!!
            What you want to do here is setState ONLY! DO NOT RETURN JSX IN componentDidMount() EVER. That's render()'s job...
            */

            let articles = data.res.map(article) => {
                return(
                    <div key={article.results}>
                    </div>
                )
            })

            /* This should be the only thing in componentDidMount() */
            this.setState({articles: articles});
            console.log("state". this.state.articles);
        })
}

    render() {
        return(
           <div className="container2">
                <div className="container1">
                {/* This is where the map belongs:
                
                this.state.articles.map((article) => {
                    return(
                        <div key={article.id}>
                            <h1>Article info can go here...</h1>
                        </div>
                    )
                })
            
            */}
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