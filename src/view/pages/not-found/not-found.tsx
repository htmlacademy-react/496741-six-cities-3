import { Link } from 'react-router-dom';

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

function NotFound(): JSX.Element {
  return (
    <main
      className="page__main page__main--index"
      style={mainStyle}
    >
      <h1>
        404. Page not found
      </h1>
      <Link to="/" style={linkStyile}>Go to main page</Link>
      <img src="img/not-found.jpg" alt="Not-found" style={imgStyle}/>
    </main>
  );
}

export default NotFound;
