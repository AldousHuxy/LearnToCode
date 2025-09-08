import { log } from 'console';
import { NextFunction, Request, Response } from 'express';
import moment from 'moment';
import colors from 'colors';

const METHOD_COLORS = {
    GET: 'green',
    POST: 'yellow',
    PUT: 'blue',
    DELETE: 'red',
    PATCH: 'cyan'
} as const

type MethodColor = keyof typeof METHOD_COLORS

export const logger = (req: Request, res: Response, next: NextFunction) => {
    const color = METHOD_COLORS[req.method as MethodColor] || 'white'
    log(colors[color](`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl} ${moment().format()}`))
    next()
}