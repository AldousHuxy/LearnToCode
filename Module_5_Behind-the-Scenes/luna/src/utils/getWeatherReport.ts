import { Weather } from '../types/weather';

export const getWeatherReport = async (location: string): Promise<string> => {
    const response = await fetch(`http://localhost:4000/api/weather?q=${location}`)

    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }

    const data: any = await response.json()

    const weather = {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
        localtime: data.location.localtime,
        temp_f: data.current.temp_f,
        is_day: data.current.is_day,
        condition: data.current.condition.text,
        wind_mph: data.current.wind_mph,
        precip_in: data.current.precip_in,
        humidity: data.current.humidity
    } as Weather

    return (`
        Weather Report
        --------------
        Location: ${weather.name}, ${weather.region}, ${weather.country}
        Local Time: ${weather.localtime}
        Temperature: ${weather.temp_f} °F
        Time of Day: ${weather.is_day ? 'Day' : 'Night'}
        Condition: ${weather.condition}
        Wind: ${weather.wind_mph} mph
        Precipitation: ${weather.precip_in} in
        Humidity: ${weather.humidity}%
    `)
}