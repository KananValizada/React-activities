import React, { Component } from 'react';

class Course extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render (props) {
        return (
            <div>
                <h1>{this.props.location.hash.substr(1,this.props.location.hash.length)}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;