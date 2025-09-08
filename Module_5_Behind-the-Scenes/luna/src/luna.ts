#! /usr/bin/env node
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { sleep } from './utils/sleep';
import { getWeatherReport } from './utils/getWeatherReport';

(async (): Promise<number> => {
    const title = chalkAnimation.rainbow('Welcome to Justin!')
    await sleep()
    title.stop()

    const weatherReport = await getWeatherReport('Lakewood')
    console.log(chalk.green(weatherReport))

    return 0
})()