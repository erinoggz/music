import Helpers from '../lib/helpers';
import StatusCodes from '../lib/response/status-codes';
import { DeezerService } from './deezer.service';

export class ArtistService {
  constructor(private deezerService: DeezerService) {}

  public searchTrack = async (search) => {
    try {
      const data = await this.deezerService.searchTracks(search);
      return Helpers.success(data);
    } catch (error) {
      return Helpers.CustomException(
        StatusCodes.UNPROCESSABLE_ENTITY,
        error?.message
      );
    }
  };

  public artistInfo = async (id: string) => {
    try {
      const data = await this.deezerService.artistInfo(id);
      return Helpers.success(data);
    } catch (error) {
      return Helpers.CustomException(
        StatusCodes.UNPROCESSABLE_ENTITY,
        error?.message
      );
    }
  };
}
