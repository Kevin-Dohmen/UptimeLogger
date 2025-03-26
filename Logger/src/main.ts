import { Logger } from './services/logger';
import { Config } from './config/config';
import ProbeService from './services/probeService';
import { ProbeScheduler } from './services/probeScheduler';

const logger: Logger = new Logger('Main');

logger.info('Starting application...');

logger.info(`Log level: ${Config.LOG_LEVEL}`);
logger.info(`Log file:  ${Config.LOG_FILE}`);

logger.info("test probes...");

ProbeService.ProbeAsync("Ping", "google.com").then((result) => {
    logger.info(`Ping result: ${result.toString()}`);
});

ProbeService.ProbeAsync("Http", "http://google.com").then((result) => {
    logger.info(`Http result: ${result.toString()}`);
});

ProbeScheduler.AddHost({
    id: 1,
    host: "google.com",
    probeType: "Ping",
    interval: 5,
    lastProbe: new Date()
});
ProbeScheduler.AddHost({
    id: 2,
    host: "http://google.com",
    probeType: "Http",
    interval: 10,
    lastProbe: new Date()
});
ProbeScheduler.AddHost({
    id: 3,
    host: "http://bing.com",
    probeType: "Http",
    interval: 15,
    lastProbe: new Date()
});
ProbeScheduler.AddHost({
    id: 4,
    host: "https://www.kevin-dohmen.nl",
    probeType: "Http",
    interval: 6,
    lastProbe: new Date()
});

ProbeScheduler.Start().then(() => {
    logger.info('Application started.');
}); 
