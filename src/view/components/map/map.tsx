import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CityType, OfferType } from '../../../types/types.ts';
import { useEffect, useRef } from 'react';
import useMap from './use-map.ts';
import { NameMap } from '../../../const.ts';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from './const.ts';

type MapProps = {
  city: CityType;
  offers: OfferType[];
  activeOffer: OfferType | undefined;
  mapName: keyof typeof NameMap;
}

const offerMapStyle = {
  width: '1144px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

function Map({city, offers, activeOffer, mapName}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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
    >
    </section>
  );
}

export default Map;
