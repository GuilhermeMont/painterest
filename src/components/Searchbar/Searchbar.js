import React,{Component} from 'react'
import classes from './Seachbar.module.css'
import icon from '../../assets/search.svg'
import Suggestions from './Suggestions/Suggestions'

class searchbar extends Component {

    state = {
      showSuggestions: false,
      search: ''
    };


    showSuggestionsHandler = () => {
        const s = this.state.showSuggestions;
        this.setState({showSuggestions: !s})
    };

    changeHandler = (event) => {
        this.setState({search: event.target.value})
    };

    render() {
        let suggestions = null;

        if (this.state.showSuggestions) {
            suggestions =(
                <Suggestions search={this.state.search}/>
            )
        }
        return (
            <div>
                <div className={classes.SearchbarContainer} onClick={this.showSuggestionsHandler}>
                    <img src={icon} alt={'search icon'}/>
                    <input className={classes.Searchbar} value={this.state.value} onChange={this.changeHandler}  placeholder='Search' type='name' name='search'/>
                </div>
                {suggestions}
            </div>
        );
    }

};

export default searchbar