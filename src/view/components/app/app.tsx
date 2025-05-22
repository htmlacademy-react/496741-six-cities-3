import { OfferType } from '../../../types/types.ts';
import Main from '../../pages/main/main.tsx';

type AppProps = {
  offers: OfferType[];
};

function App({offers}: AppProps) : JSX.Element {

  return (
    <Main offers={offers}/>
  );
}

export default App;
