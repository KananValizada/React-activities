import React from "react"
import Navbar from '../Navbar/Navbar'
import headerImage from "../../assets/header3.jpg"
import Typography from '@mui/material/Typography';
import classes from './Header.module.css'
import { Button } from "@mui/material";

const Header = () => {
    return <React.Fragment>
       <div className={classes.headerImage}>
            <div >
            <h1 className={classes.headerQuote}>Yaşa!<br/> Yarat!<br/> Əylən!</h1>
            </div>
            <div>
               <button>Qaliblərimiz: 0 ədəd</button>
               <Button>Aktiv Yarışmalar: 0 ədəd</Button>
               <Button>Bitmiş Yarışmalar: 0 ədəd</Button>
              

            </div>
        
        </div>
        
    </React.Fragment>
}
export default Header