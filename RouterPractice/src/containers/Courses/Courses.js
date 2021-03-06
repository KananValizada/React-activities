import React, { Component } from 'react';
import Course from '../Course/Course'
import { Link ,Route } from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    clickHandler = ()=>{

    }
    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <Link to={{
                                pathname:'/courses/' + course.id,
                                hash:course.title
                             }} property={course.title}><article  className="Course" key={course.id}>{course.title}</article></Link>;
                        } )
                    }
                </section>
            </div>
        );
    }
}

export default Courses;