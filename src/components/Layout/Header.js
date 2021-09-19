import { Fragment } from "react";
import classes from './Header.module.css';
import ballsImage from '../../assets/11111.jpg';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes.headertitle}>Book-A-Court</h1>
                <label className={classes.label} onClick={props.onShowLogin}>Registracija</label>
            </header>
            <div className={classes['main-image']}>
                <img src={ballsImage} alt="Tennis balls and Basketball ball"/>
            </div>
        </Fragment>
    );
};

export default Header;