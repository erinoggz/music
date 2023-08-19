import express, { Application } from 'express';
import config from './app/config/config';
import Routes from './app/route';
import cors from 'cors';
import response from './app/lib/response';

import { LoggerService } from './app/service/logger.service';
import StatusCodes from './app/lib/response/status-codes';
import di from './app/config/di';

const logger: LoggerService = di.get('logger');

class Server {
  /**
    The Express application instance.
    @readonly
    @type {Application}
  */
  private app: Application;
  constructor() {
    this.app = express();
  }

  /**
    Configures the server, enable cors and mount routes.
     * @return {void}
  */
  public configuration() {
    this.app.use(response);
    this.app.use(cors());
    this.app.use(express.json());

    this.app.get('/', (req, res) => {
      res.status(StatusCodes.OK).json('starting...');
    });
    Routes(this.app);
  }
  public async start() {
    const PORT: any = config.web.port;
    this.configuration();
    this.app.listen(PORT, () => {
      logger.log(`Server is listening on port ${PORT}.`);
    });
  }
}
const server = new Server();
server.start();
