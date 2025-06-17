import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { CityType } from '../../../types/types.ts';
import { Map, TileLayer } from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  const TILE_LAYER_URL_PATTERN =
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  const TILE_LAYER_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(
        mapRef.current,
        {
          center: {
            lat: city.location.latitude,
            lng: city.location.longitude,
          },
          zoom: city.location.zoom,
        }
      );

      const layer = new TileLayer(
        TILE_LAYER_URL_PATTERN,
        {
          attribution: TILE_LAYER_ATTRIBUTION,
        }
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
