import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

class Header extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    const isHome = pathname === '/';
    const isJustAnotherPage = pathname === '/page';
    const isIdeaCreatorPage = pathname === '/new-idea';
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">JInnovate</Link>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav mr-auto">
            <li className={!isHome ? 'nav-item active' : 'nav-item disabled'}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={!isJustAnotherPage ? 'nav-item active' : 'nav-item disabled'}>
              <Link className="nav-link" to="/page">Ideas</Link>
            </li>
            <li className={!isIdeaCreatorPage ? 'nav-item active' : 'nav-item disabled'}>
              <Link className="nav-link" to="/new-idea">New Idea</Link>
            </li>
          </ul>
          <div>
            <form className="form-inline my-2 my-md-0">
              <div className="input-group">
                <input type="text" className="form-control mr-sm-2" placeholder="Search for..." />
                <button className="btn btn-outline-success my-2 my-sm-0" type="button">Go!</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
