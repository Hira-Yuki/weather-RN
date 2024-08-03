import DailyWeather from './DailyWeather';
import LoadingIndicator from './LoadingIndicator';

export default function DynamicView({ days }) {
  if (days.length === 0) {
    return <LoadingIndicator />;
  } else {
    return days.map((day, index) => (
      <DailyWeather
        key={index}
        index={index}
        temp={day.main.temp}
        main={day.weather[0].main}
        description={day.weather[0].description}
      />
    ));
  }
}
