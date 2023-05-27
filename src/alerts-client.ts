import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { locations } from './locations';
import { Alert, ActiveAlertsResponse, Location } from './types';

/**
 * Client for retrieving active alerts.
 */
export class AlertsClient {
  private token: string;
  private lastModified: string | null;

  /**
   * Constructor of the client.
   * @param {string} token API access token.
   */
  constructor(token: string) {
    this.token = token;
    this.lastModified = null;
  }

  /**
   * Retrieves a list of active alerts.
   * Returns a list of regions where there is an active air raid or any other threat.
   * @returns {Promise<Alert[]>} Array of alert objects.
   */
  public async getActiveAlerts(): Promise<Alert[]> {
    try {
      const url = 'https://api.alerts.in.ua/v1/alerts/active.json';

      const headers: AxiosRequestConfig['headers'] = {
        Authorization: `Bearer ${this.token}`,
        'If-Modified-Since': this.lastModified || '',
      };

      const config: AxiosRequestConfig = {
        url,
        method: 'GET',
        headers,
      };

      const response: AxiosResponse<ActiveAlertsResponse> = await axios(config);

      if (response.status === 200) {
        this.lastModified = response.headers['last-modified'] || null;
        return response.data.alerts;
      } else {
        throw new Error('Failed to fetch active alerts');
      }
    } catch (error) {
      throw new Error('An error occurred while fetching active alerts');
    }
  }

  /**
   * Retrieves a list of locations.
   * @returns {Location[]} Array of location objects.
   */
  public getLocations(): Location[] {
    return locations;
  }

  /**
   * Retrieves a location by its unique identifier.
   * @param uid Unique identifier of the location.
   * @returns {Location | undefined} Location object.
   */
  public getLocation(uid: string): Location | undefined {
    return locations.find((location) => location.uid === uid);
  }
}
