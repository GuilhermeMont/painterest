import React, {Component} from 'react'
import PeopleRecommendation from './PeopleRecommendation/PeopleRecommendation'

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

        const peopleRecommendations = people.map(p => {
            return <div style={{display:'block'}}><PeopleRecommendation username={p.username} name={p.name} searchTerm={this.props.search}/></div>
        });

        return (
            <div>
                {peopleRecommendations}
            </div>

        )
    }
}

export default Match