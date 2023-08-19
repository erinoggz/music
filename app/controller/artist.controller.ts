import { IRequest, IResponse } from '../common/Interface/IResponse';
import { ArtistService } from '../service/artist.service';

class ArtistController {
  constructor(private artistService: ArtistService) {}

  /**
   * @route GET api/v1/artist/track
   * @desc search track
   * @access Public.
   * @returns {Promise<void>}
   */
  searchTrack = async (req: IRequest, res: IResponse): Promise<void> => {
    try {
      const { search } = req.query;
      const result = await this.artistService.searchTrack(search);
      return res.ok(result, 'tracks fetched successful');
    } catch (error) {
      return res.serverError(
        error,
        error?.message || 'An error occured while trying to search for tracks',
        error?.code
      );
    }
  };

  /**
   * @route GET api/v1/artist/:id
   * @desc get artist info
   * @access Public.
   * @returns {Promise<void>}
   */
  artistInfo = async (req: IRequest, res: IResponse): Promise<void> => {
    try {
      const { id } = req.params;
      const result = await this.artistService.artistInfo(id);
      return res.ok(result, 'artist info fetched successful');
    } catch (error) {
      return res.serverError(
        error,
        error?.message || 'An error occured while trying to fetch artist info',
        error?.code
      );
    }
  };
}

export default ArtistController;
