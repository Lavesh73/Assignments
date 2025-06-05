import {useEffect,useState} from 'react';

function Weather() {
  const [weather,setWeather] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const API_KEY = '09d932e71f935dd953d1e71a3fc1d7ea';
  const city = 'Mumbai';
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch weather');
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h3>Weather in :{weather.name}</h3><br></br><hr></hr>
      <p>Temperature:{weather.main.temp}°C</p>

    </div>
  );}
export default Weather;
