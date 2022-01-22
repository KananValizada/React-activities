import React from "react"
import Navbar from '../Navbar/Navbar'
import headerImage from "../../assets/header3.jpg"
import classes from './Header.module.css'

const Header = () => {
    return <React.Fragment>
        <Navbar />
        <div className={classes.headerImage}>
        <img src={headerImage} />

        </div>
        
    </React.Fragment>
}
export default Header