import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const API_KEY = '';

export default function useWeather() {
  const [city, setCity] = useState('Loading...');
  const [ok, setOk] = useState(true);
  const [days, setDays] = useState([]);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();

    if (!granted) setOk(false);

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });

    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false },
    );

    setCity(location[0].city);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=kr&appid=${API_KEY}`,
    );
    const json = await response.json();
    setDays(json.list.filter(({ dt_txt }) => dt_txt.endsWith('3:00:00')));
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
