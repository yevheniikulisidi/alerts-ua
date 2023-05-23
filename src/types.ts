/**
 * Interface for representing the response of the /alerts/active endpoint.
 */
export interface ActiveAlertsResponse {
  alerts: Alert[]; // Array of alert objects
  meta: {
    last_updated_at: Date; // Last updated time of the record in the database
    type: unknown; // Type of the response
  };
  disclaimer: string; // Disclaimer
}

/**
 * Interface for representing alert data.
 */
export interface Alert {
  id: number; // Unique identifier of the record
  location_title: string; // Location name
  location_type: 'oblast' | 'raion' | 'city' | 'hromada' | 'unknown'; // Location type
  started_at: string; // Start time of the alert
  finished_at: string | null; // End time of the alert (can be null if the alert is ongoing)
  updated_at: string; // Last updated time of the record in the database
  alert_type:
    | 'air_raid'
    | 'artillery_shelling'
    | 'urban_fights'
    | 'chemical'
    | 'nuclear'; // Alert type
  location_uid: string; // Unique identifier of the location
  location_oblast: string; // Location region
  location_raion: string; // Location district
  notes: string; // Notes
  calculated: boolean; // Indicates whether the alert's end time is predicted or based on actual end time
}
