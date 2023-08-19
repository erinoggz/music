import axios, { AxiosInstance } from 'axios';
import config from '../config/config';
import { LoggerService } from './logger.service';
import Helpers from '../lib/helpers';
import StatusCodes from '../lib/response/status-codes';

export class DeezerService {
  client: AxiosInstance;

  constructor(private logger: LoggerService) {
    this.client = axios.create({
      baseURL: `${config.dezeerApi.url}`,

      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async searchTracks(
    search: string,
  ): Promise<object> {
    try {
      const response = await this.client.get(`/search/track?q=${search}`);
      return response.data.data;
    } catch (error) {
      this.logger.log(error.response);
      return Helpers.CustomException(
        StatusCodes.UNPROCESSABLE_ENTITY,
        error?.message
      );
    }
  }

  async artistInfo(
    id: string,
  ): Promise<object> {
    try {
      const [artist, topTracks, allAlbums] = await Promise.all([
        this.client.get(`/artist/${id}`),
        this.client.get(`/artist/${id}/top`),
        this.client.get(`/artist/${id}/albums`),
      ]);
  
      return {
        artist: artist.data,
        topTracks: topTracks.data,
        allAlbums: allAlbums.data,
      };
    } catch (error) {
      this.logger.log(error.response);
      return Helpers.CustomException(
        StatusCodes.UNPROCESSABLE_ENTITY,
        error?.message
      );
    }
  }
}
