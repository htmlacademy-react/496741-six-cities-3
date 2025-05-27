import { Outlet, useLocation } from 'react-router-dom';
import Logo from '../../components/logo/logo.tsx';
import { AppRoute } from '../../../const.ts';

const getLayoutState = (pathname: AppRoute) => {
  let layoutClassName = 'page';
  let isMainPage = false;
  let shouldRenderUser = true;

  if (pathname === AppRoute.Root) {
    layoutClassName = `${layoutClassName} page--gray page--main`;
    isMainPage = true;
  } else if (pathname === AppRoute.Login) {
    layoutClassName = `${layoutClassName} page--gray page--login`;
    shouldRenderUser = false;
  }

  return {layoutClassName, isMainPage, shouldRenderUser};
};

function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const {layoutClassName, isMainPage, shouldRenderUser} = getLayoutState(pathname as AppRoute);

  return (
    <div className={layoutClassName}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo isActive={isMainPage} />
            </div>
            {shouldRenderUser &&
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
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
