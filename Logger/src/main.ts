import { Logger } from './services/logger';
import { Config } from './config/config';
import ProbeService from './services/probeService';

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
