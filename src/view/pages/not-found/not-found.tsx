import { Link } from 'react-router-dom';
import { TextNotFound } from '../../../const';

const mainStyle = {
  alignItems: 'center'
};

const linkStyile = {
  fontSize: '150%',
  textDecoration: 'underline',
};

const imgStyle = {
  marginBottom: '50px',
  maxWidth: '100%',
  height: 'auto',
};

type NotFoundProps = {
  type: keyof typeof TextNotFound;
}
function NotFound({type}: NotFoundProps): JSX.Element {
  return (
    <main
      className="page__main page__main--index"
      style={mainStyle}
    >
      <h1>
        {TextNotFound[type]}
      </h1>
      <Link to="/" style={linkStyile}>Go to main page</Link>
      <img src="img/not-found.jpg" alt="Not-found" style={imgStyle}/>
    </main>
  );
}

export default NotFound;
