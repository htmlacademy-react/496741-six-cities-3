import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const.ts';
import { useAppDispatch, useAppSelector } from '../../../hooks/index.ts';
import { selectCity } from '../../../store/selectors/offers.ts';
import { FormEvent, useRef } from 'react';
import { loginAction } from '../../../store/api-actions.ts';

type LoginProps = {
  authorionStatus: AuthorizationStatus;
};

function Login({authorionStatus}: LoginProps): JSX.Element {

  const city = useAppSelector(selectCity);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordReff = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  if (authorionStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(emailRef.current !== null && passwordReff.current !== null) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordReff.current.value,
      }));
    }
  };

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={emailRef}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordReff}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city.name}</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
