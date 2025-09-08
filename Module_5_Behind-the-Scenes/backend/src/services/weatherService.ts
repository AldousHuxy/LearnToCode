import { WEATHER_API_KEY } from '../env';
import { Weather } from '../types/weather';

export const WeatherService = {
    getWeather: async (q: string): Promise<Weather> => {
        const response: Response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${q}&aqi=no`)

        if (!response.ok) {
            throw new Error('Error fetching weather data')
        }

        const weather = await response.json()
        
        return weather as Weather
    }
}