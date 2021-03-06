
import React, { Component } from 'react' ; 
import axios from 'axios';
import {Link} from 'react-router-dom'
import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount (){
        axios.get('/posts')
             .then(responce =>{
                 const posts = responce.data.slice(0,4);
                 const updatedPosts = posts.map(post=> {
                     return {
                         ...post,
                        author:'Kanan'
                     }
                 })
                 this.setState({posts: updatedPosts})
                 console.log(responce)
             })
    }

    
    postSelectedHandler = (id) =>{
        this.props.history.push('/' + id)
    }

    render(){
        const posts = this.state.posts.map(post=> {
            return (
             //   <Link to={'/'+post.id}  key={post.id} > 
                 <Post 
                title={post.title} 
                author={post.author}
                clicked={()=>this.postSelectedHandler(post.id)}/>)
             //   </Link>) ; 
        });

        return (
            <section className="Posts">
            {posts}
            </section>
        )

    }
}

export default Posts