import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>{!isLoggedIn && <Link to="/auth">Login</Link>}</li>
          <li>{isLoggedIn && <Link to="/profile">Profile</Link>}</li>
          <li>
            {isLoggedIn && <button onClick={authCtx.logout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
