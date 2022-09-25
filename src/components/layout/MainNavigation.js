import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/welcome' className={(navData) => navData.isActive ? classes.active : ''}>
             Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to='/products' className={(navData) => navData.isActive ? classes.active : ''}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
