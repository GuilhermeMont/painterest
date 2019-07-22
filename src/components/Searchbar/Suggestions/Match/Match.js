import React, {Component} from 'react'
import Recommendation from './Recommendation/Recommendation'
import classes from './Match.module.css'

class Match extends Component {

    render() {
        const people = [
            {
                name: 'Real Good Pics',
                username: 'goodpics',
            },
            {
                name: 'Alaska Boy',
                username: 'ilovealaska',
            },
            {
                name: 'My dog ate my homework',
                username: 'goodboy',
            },
        ];

        const boards = [
            {
                name:'My collection of Bugs',
                username: 'TheBugCollector'
            },
            {
                name:'Tasty cooking ideas',
                username: 'AwesomeChef'
            },
            {
                name:'I love Flowers !!',
                username: 'FlowerGuy'
            }
        ];

        const peopleRecommendations = people.map(p => {
            return <div style={{display: 'block'}}><Recommendation username={p.username} name={p.name}
                                                                   searchTerm={this.props.search}/></div>
        });

        const boardRecommendations = boards.map(b => {
            return <div style={{display:'block'}}><Recommendation username={b.username} name={b.name} searchTerm={this.props.search}/></div>
        });

        return (
            <div className={classes.Match}>
                <span className={classes.Title}>People</span>
                {peopleRecommendations}
                <span className={classes.description}>People named {this.props.search}...</span>
                <span className={classes.Title}>Boards</span>
                {boardRecommendations}
                <span className={classes.description}>Boards called {this.props.search}...</span>
            </div>

        )
    }
}

export default Match