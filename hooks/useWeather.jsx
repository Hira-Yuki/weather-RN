import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../constants/api';

export default function useWeather() {
  const [city, setCity] = useState('Loading...');
  const [ok, setOk] = useState(true);
  const [days, setDays] = useState([]);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();

    if (!granted) {
      setOk(false);
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });

    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false },
    );

    setCity(location[0].city);

    const response = await fetch(
      `${API_URL}?lat=${latitude}&lon=${longitude}&units=metric&lang=kr&appid=${API_KEY}`,
    );
    const json = await response.json();

    const filteredJson = json.list.filter(({ dt_txt }) =>
      dt_txt.endsWith('3:00:00'),
    );
    setDays(filteredJson);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return {
    ok,
    days,
    city,
  };
}
