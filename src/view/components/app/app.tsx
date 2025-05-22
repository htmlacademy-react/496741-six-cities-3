import { CityNameType, OfferType } from '../../../types/types.ts';
import Main from '../../pages/main/main.tsx';

type AppProps = {
  offers: OfferType[];
  activeLocation: CityNameType;
};

function App({offers, activeLocation}: AppProps) : JSX.Element {

  return (
    <Main offers={offers} activeLocation={activeLocation}/>
  );
}

export default App;
