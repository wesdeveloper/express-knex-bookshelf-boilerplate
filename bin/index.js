import app from '../src/app';
import config from 'config';
import Logger from 'basic-logger';

const logger = new Logger({ showTimestamp: true });
try {
  const { PORT } = config.get(process.env.NODE_ENV);
  app.listen(PORT);
  logger.info(`App listening at port ${PORT}`);
} catch (e) {
  logger.error(e);
  throw e;
}
