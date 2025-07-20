import { layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from './use-map.ts';
import { NameMap } from '../../../const.ts';
import { currentCustomIcon, defaultCustomIcon, offerMapStyle } from './const.ts';
import { useAppSelector } from '../../../hooks/index.ts';
import { selectCity } from '../../../store/selectors/offers.ts';
import { OfferType } from '../../../types/offer.ts';

type MapProps = {
  offers: OfferType[];
  activeOffer: OfferType | undefined;
  mapName: keyof typeof NameMap;
}

function Map({offers, activeOffer, mapName}: MapProps): JSX.Element {
  const city = useAppSelector(selectCity);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([
        city.location.latitude,
        city.location.longitude,
      ],
      city.location.zoom);
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(
          activeOffer && offer === activeOffer
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOffer]);

  return (
    <section
      className={`${NameMap[mapName]}__map map`}
      ref={mapRef}
      style={NameMap[mapName] === NameMap.OFFER ? offerMapStyle : {}}
      data-testid="map"
    >
    </section>
  );
}

export default Map;
