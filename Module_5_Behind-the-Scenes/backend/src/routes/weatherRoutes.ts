import { Router } from 'express';
import { getWeather } from '../controller/weatherController';

export const router: Router = Router()

router.get('/', getWeather)