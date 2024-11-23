type WeatherProps = {
    temperature: number;
    weather: string;
    location: string;
  };
  
  export const Weather = ({ temperature, weather, location }: WeatherProps) => {
    return (
      <div className="p-4 border">
        <h2>Current Weather for {location}</h2>
        <p>Condition: {weather}</p>
        <p>Temperature: {temperature}°F</p>
      </div>
    );
  };
  