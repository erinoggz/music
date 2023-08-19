import express, { Router } from 'express';
import di from '../../config/di';
import ArtistController from '../../controller/artist.controller';

/**
  Express Router for handling routes.
  @type {Router}
*/
const ArtistRouter: Router = express.Router();
const artistController: ArtistController = di.get('artistController');

ArtistRouter.get('/track',artistController.searchTrack)
ArtistRouter.get('/:id',artistController.artistInfo)

export default ArtistRouter;
