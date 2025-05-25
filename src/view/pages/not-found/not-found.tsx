import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo.tsx';

function NotFound(): JSX.Element {
  const linkStyile = {
    fontSize: '150%',
    marginBottom: '20px',
    textDecoration: 'underline',
  };

  const imgStyle = {
    marginBottom: '50px',
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo isActive={false} />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main
        className="page__main page__main--index"
        style={{margin: 'auto', overflow: 'visible'}}
      >
        <h1>
          404. Page not found
        </h1>
        <Link to="/" style={linkStyile}>Go to main page</Link>
        <img src="img/not-found.jpg" alt="Not-found" style={imgStyle}/>
      </main>
    </div>
  );
}

export default NotFound;
