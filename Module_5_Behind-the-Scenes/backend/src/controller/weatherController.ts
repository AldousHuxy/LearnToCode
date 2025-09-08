import asyncHandler from 'express-async-handler';
import { Request, RequestHandler, Response } from 'express';
import { WeatherService } from '../services/weatherService';
import { Weather } from '../types/weather';

export const getWeather: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
    const location = String(req.query.location) || 'Denver'

    const weather: Weather = await WeatherService.getWeather(location)

    res.json(weather).status(200)
})