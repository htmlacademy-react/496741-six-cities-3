import { Link, Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo.tsx';
import { AppRoute, AuthorizationStatus, PageTitle } from '../../../const.ts';
import Footer from '../footer/footer.tsx';
import { useAppDispatch, useAppSelector } from '../../../hooks/index.ts';
import { MouseEvent } from 'react';
import { logoutAction } from '../../../store/api-actions.ts';
import { selectAuthInfo, selectFavorites } from '../../../store/selectors/user.ts';
import { selectAuthorizationStatus } from '../../../store/selectors/auth.ts';

const getLayoutState = (pathname: AppRoute) => {
  let layoutClassName = 'page';
  let isMainPage = false;
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  if (pathname === AppRoute.Root) {
    layoutClassName = `${layoutClassName} page--gray page--main`;
    isMainPage = true;
  } else if (pathname === AppRoute.Login) {
    layoutClassName = `${layoutClassName} page--gray page--login`;
    shouldRenderUser = false;
  } else if (pathname === AppRoute.Favorites) {
    shouldRenderFooter = true;
  }

  return {layoutClassName, isMainPage, shouldRenderUser, shouldRenderFooter};
};

function Layout(): JSX.Element {
  const authInfo = useAppSelector(selectAuthInfo);
  const favorites = useAppSelector(selectFavorites);
  const {pathname} = useLocation();

  const {
    layoutClassName,
    isMainPage,
    shouldRenderUser,
    shouldRenderFooter,
  } = getLayoutState(pathname as AppRoute);

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const title = PageTitle[pathname as AppRoute];

  const handleLogout = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <div className={layoutClassName}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {authorizationStatus === AuthorizationStatus.Auth ?
                      <>
                        <span className="header__user-name user__name">{authInfo?.email}</span>
                        <span className="header__favorite-count">{favorites.length}</span>
                      </> :
                      <span className="header__login">Sign in</span>}
                  </Link>
                </li>
                {authorizationStatus === AuthorizationStatus.Auth &&
                <li className="header__nav-item">
                  <Link className="header__nav-link" onClick={handleLogout} to={AppRoute.Root}>
                    <span className="header__signout">
                      Sign out
                    </span>
                  </Link>
                </li>}
              </ul>
            </nav>}
          </div>
        </div>
      </header>
      <Outlet />
      {shouldRenderFooter && <Footer />}
    </div>
  );
}

export default Layout;
