import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {

    // let friends = props.state.sideBar.map(() => <Friends  img={friends.img}/>);

    return <nav className={s.nav}>
        <div className={s.menu}>
            Main Menu
            <hr />
        </div>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.friend}>
            <a activeClassName={s.active}>Friends</a>
            {/* {friends} */}
        </div>
    </nav>
}

export default Navbar;