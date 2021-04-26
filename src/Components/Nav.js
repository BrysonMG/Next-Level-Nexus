import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import '../CSS/Nav.css'
import HomeIcon from '@material-ui/icons/Home'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';

export const Nav = () => (
    <ul className="navbar">
        <li className="navItem">
            <Link style={{textDecoration: 'none'}} to="/"><Button variant="contained" color="primary"><HomeIcon/> Home</Button></Link>
        </li>
        <li className="navItem">
            <Link style={{textDecoration: 'none'}} to="/GameLibrary"><Button variant="contained" color="primary"><SportsEsportsIcon/> Game Library</Button></Link>
        </li>
        <li className="navItem">
            <Link style={{textDecoration: 'none'}} to="/MyStuff"><Button variant="contained" color="primary"><PersonIcon/> My Stuff</Button></Link>
        </li>
        <li className="navItem">
            <Link style={{textDecoration: 'none'}} to="/Groups"><Button variant="contained" color="primary"><GroupIcon/> Groups</Button></Link>
        </li>
    </ul>
)
