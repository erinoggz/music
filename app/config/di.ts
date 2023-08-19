import di from './service-locator';

/**
 * Our Dependency Injection: All Services and Controllers will be registered here
 * This will enable us to instatiate only once and use accross all our application
 */
import { LoggerService } from '../service/logger.service';
import { ArtistService } from '../service/artist.service';
import ArtistController from '../controller/artist.controller';
import { DeezerService } from '../service/deezer.service';

/**
 * Register Logger Service
 * Returns an instance of Logger Service
 */
di.register('logger', () => {
  return new LoggerService();
});


/**
 * Register Deezer Service
 * Returns an instance of Deezer Service
 */
di.register('deezerService', () => {
  const logger = di.get('logger');
  return new DeezerService(logger)
})

/**
 * Register Artist Service
 * Returns an instance of Artist Service
 */
di.register('artistService', () => {
  const deezerService = di.get('deezerService');

  return new ArtistService(deezerService);
});

di.register('artistController', () => {
  const artistService = di.get('artistService');
  return new ArtistController(artistService);
});

export default di;
