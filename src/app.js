import express from 'express';
import logger from 'morgan';
import BasicLogger from 'basic-logger';
import bodyParser from 'body-parser';

global.log = new BasicLogger({ showTimestamp: true });

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json({ limit: '150mb' }));
app.use(bodyParser.urlencoded({ limit: '150mb', extended: true }));

export default app;
