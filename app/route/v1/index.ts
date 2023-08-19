import express, { Router } from 'express';
import ArtistRouter from './artist';
/**
 * export all registered routers. And give them base routes
 */
const AppRouter: Router = express.Router();

AppRouter.use('/artist', ArtistRouter);

export default AppRouter;
