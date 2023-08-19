import { ErrnoException, ISuccess } from '../common/Interface/IResponse';
import ResponseMessages from './response/response-messages';
import StatusCodes from './response/status-codes';

/**
 * Class with methods to help
 */
export default class Helpers {
    /**
   * returns success data.
   * @param  {object} obj - The data.
   * @param  {string} message - success message.
   */
    static success = (
      data: object | Array<object> | null,
      message?: string
    ): ISuccess => {
      return {
        message,
        data,
        status: ResponseMessages.STATUS_SUCCESS,
      };
    };

  /**
   * Creates custom Error with status codes.
   * @param  {object} obj - The object to check.
   * @return {object} - The result.
   */
  static CustomException(code?: number, message?: string): ErrnoException {
    const error: ErrnoException = new Error(message || '');
    error.code = code || StatusCodes.UNPROCESSABLE_ENTITY;
    throw error;
  }
}
