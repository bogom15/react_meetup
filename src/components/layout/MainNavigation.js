import React from 'react';
import {Link} from 'react-router-dom' 
import { useContext } from 'react';
import FavouritesContext from '../../store/favourites-context';
import classes from './MainNavigation.module.css'

function MainNavigation() {
    const favouritesCtx = useContext(FavouritesContext);
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                <li>
                    <Link to="/">All Meetups</Link>
                </li>

                <li>
                    <Link to="/new-meetup">New Meetups</Link>
                </li>

                <li>
                    <Link to="/favourite">Favourites 
                    <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
                    </Link>
                </li>

                </ul>
            </nav>
        </header>
    )

}

export default MainNavigation;