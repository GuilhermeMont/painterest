import React,{Component} from 'react'
import classes from  './Suggestions.module.css'
import Topics from './Topics/Topics'
import RecentSearches from './RecentSearches/RecentSearches'
import Match from  './Match/Match'

class Suggestions extends Component{

    state = {
      searchResults: ''
    };

    componentDidUpdate(prevProps){
        if (this.state.searchResults !== this.props.search){
            this.setState({searchResults: this.props.search});
        }
    };

    render() {

        let req = require.context("../../../../src/assets", false, /.*\.jpg$/);

        const topics = req.keys().map(key => {
            return <Topics key={req(key)} src={req(key)} title={'Cool Pics'}/>
        });

        const tags = ['Cool Pics','Chinese art','Dark Forest', 'Good Food', 'Mood & Coffee'];

        const recentSearches = tags.map(tag => {
            return <RecentSearches key={tag} text={tag}/>
        });

        let suggestions = (
            <div>
                <span className={classes.SuggestionsTitle}>Recent Searches</span>
                {recentSearches}
                <span className={classes.SuggestionsTitle}>Some ideas for you</span>
                <div className={classes.Topics}>
                    <div className={classes.wrapper}>
                        {topics.slice(0,4)}
                    </div>
                    <div className={classes.wrapper}>
                        {topics.slice(4,6)}
                    </div>
                </div>
            </div>
        );

        if (this.state.searchResults){
            suggestions = (
                <Match search={this.props.search}/>
            )
        }

        return (
            <div className={classes.SuggestionsContainer}>
                {suggestions}
            </div>
        );
    }
};

export default Suggestions