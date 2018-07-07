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