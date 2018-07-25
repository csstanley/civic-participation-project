import React, { Component } from 'react';
import axios from 'axios';

export default class Voting extends Component {

    state = {
        news: []
    };

    componentDidMount() {
        console.log("Mounting!!");

        axios({
            method: 'get',
            url:  "https://cors-anywhere.herokuapp.com/" + "https://api.propublica.org/congress/v1/senate/votes/recent.json?api_key=bods0ZJmBorBIEe01JJfBZTlmKo0liFs2hEHf0GR", 
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        }

        ).then((res) => {
            console.log(res);
            console.log("This works!");

            // this.setState({ votes: res.data.articles });
            // console.log(this.state.news);

        })

    }

    render() {
        console.log("Rendering!");

        return (
            <div></div>
        )

    }

}