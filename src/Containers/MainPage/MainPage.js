import React,{Component} from 'react'
import axios from 'axios'
import classes from './MainPage.module.css'
import Picture from './Picture/Picture'

class MainPage extends Component {

    // componentDidMount() {
    //     console.log(this.props);
    //     axios.get('photos').then(res => {
    //         console.log(res)
    //         // const posts = res.data.slice(0, 4);
    //         // const updatedPosts = posts.map(post => {
    //         //     return {
    //         //         ...post,
    //         //         author: 'Max'
    //         //     }
    //         // });
    //         // this.setState({posts: updatedPosts});
    //         // console.log(this.state.posts);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }


    render() {

        let req = require.context("../../assets", false, /.*\.jpg$/);

        const pictures = req.keys().map(pic => {
            return <Picture src={req(pic)}/>
        });


        return (
            <div className={classes.MainPage}>
                {pictures}
            </div>
        );
    }
}

export default MainPage