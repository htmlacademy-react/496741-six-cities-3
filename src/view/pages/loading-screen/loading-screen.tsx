import { PacmanLoader } from 'react-spinners';
import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <main className='page__main page__main--loading-screen' data-testid="loading-screen">
      <PacmanLoader size={100} color="#4481c3" />
    </main>
  );
}

export default LoadingScreen;
