import { Link } from 'react-router-dom';
import { TextNotFound } from '../../../const';
import './not-found.css';

type NotFoundProps = {
  type: keyof typeof TextNotFound;
}
function NotFound({type}: NotFoundProps): JSX.Element {
  return (
    <main
      className="page__main page__main--index page__main--not-found"
    >
      <h1 data-testid="text-not-found">
        {TextNotFound[type]}
      </h1>
      <Link className="link__not-found" to="/">Go to main page</Link>
      <img className="img__not-found" src="img/not-found.jpg" alt="Not-found" />
    </main>
  );
}

export default NotFound;
